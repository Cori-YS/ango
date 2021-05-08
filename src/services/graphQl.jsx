import Axios from "axios";
import React from "react";
import { Query } from "react-apollo";
import { isEmpty } from "../general/genericsFun";
import axios from 'axios'
const __url = "http://172.16.16.57:89/graphql/";

class GraphQL {
  constructor() {
    this.schema = "";
    this.__tb = "";
  }

  generic({ query, variables }) {
    if (query === "")
      return console.error("you must pass some string on the query property");
    if (query !== undefined) {
      this.schema = { query, variables };
    } else {
      this.schema = { query };
    }
    return axios.post(__url, this.schema);
  }

  get({ query, table, properties }) {
    this.__tb = table;
    var val = "",
      props = "";
    const isSearchProps = ",$search:Boolean";
    const isSearchVal = ",search:$search";
    if (query !== undefined && query.hasOwnProperty("search")) {
      val = isSearchVal;
      props = isSearchProps;
    }
    if (query === "")
      return console.error("you must pass some string on the query property");
    if (query !== undefined) {
      this.schema = {
        query: `query($id: String!) { ${table} (id: $id) {${properties}} }`,
        variables: {
          ...query,
        },
      };
    } else {
      this.schema = {
        query: `query { ${table} {${properties}} }`,
      };
    }
    return this;
  }

  add({ table, properties, values, useBrackets }) {
    let _Input = table + "Input";
    let Input = useBrackets === true ? `[${_Input}]` : _Input;
    this.schema = {
      query: `mutation($obj: ${Input}!) { add${table}(obj: $obj) {${properties}} }`,
      variables: {
        obj: values,
      },
    };
    this.__tb = `add${table}`;

    return this;
  }

  update({ query, table, properties, values }) {
    this.schema = {
      query: `mutation($id: String!, $obj: ${table}Input!) { update${table}(id: $id, obj: $obj) {${properties}} }`,
      variables: {
        id: query.id,
        obj: values,
      },
    };
    this.__tb = `update${table}`;
    return this;
  }

  remove({ query, table, properties }) {
    console.log(query);
    this.schema = {
      query: `mutation($id: String!) { ${table}(id: $id) {${properties}} }`,
      variables: {
        id: query.id,
      },
    };
    this.__tb = `remove${table}`;
    console.log(this.schema);
    return this;
  }

  authStore(values) {
    // let query = `query($obj:loginInput!) {login(obj:$obj){ token nomeUsuarioOuEmail lembrarDeMim pessoaId }}`,
    let query = `query($obj:loginUserInput!)
        {
           loginUser(obj:$obj)
           {
            emailouUsuario
            estadoUario
            pessoaId
            password
            pessoa
            {
              nomeCompleto
              idPessoa
            }
           }
        }`,
      variables = { obj: values };

    this.schema = { query, variables };

    return fetch(__url, {
      method: "post",
      body: JSON.stringify(this.schema),
      headers: { "Content-Type": "application/json" },
    });
  }

  authUpdateCredentials(values, pessoaId) {
    // let query = `query($obj:loginInput!) {login(obj:$obj){ token nomeUsuarioOuEmail lembrarDeMim pessoaId }}`,
    let query = `mutation($obj:loginDtoInput!,$id:String!)
        {
          updateLogin(obj:$obj,id:$id)
          {
            email
          }
        }`,
      variables = { id: pessoaId, obj: values };

    console.log(variables);

    this.schema = { query, variables };

    return fetch(__url, {
      method: "post",
      body: JSON.stringify(this.schema),
      headers: { "Content-Type": "application/json" },
    });
  }

  async run() {
    return await Axios.post(__url, this.schema)
      .then((res) => {
        let result = { success: false, data: [] };
        const { errors } = res.data;
        if (!isEmpty(errors)) throw new Error(errors[0].message);
        result = res.data.data;
        result.success = true;
        return result;
      })
      .catch((err) => err);
  }

  selectValues({ data, value, label, icon, _this, property, _stateEl }, id) {
    data =
      data == null
        ? []
        : data.map((item) => {
            let data = { value: null, label: null };
            data.value = item[value];
            data.label = item[label];
            // if(!isEmpty(icon))
            data["icon"] = icon;
            if (id != null) data.id = item[id];
            return data;
          });
    typeof _this === "function"
      ? _this((prevState) => {
          let _mStateEl = Object.assign({}, prevState[_stateEl]);
          _mStateEl[property] = data;
          return {
            [_stateEl]: _mStateEl,
          };
        })
      : _this.setState((prevState) => {
          let _mStateEl = Object.assign({}, prevState[_stateEl]);
          _mStateEl[property] = data;
          return {
            [_stateEl]: _mStateEl,
          };
        });
  }

  setters({ colections, label, value, func }) {
    if (!colections) return;
    colections = colections.map((colection) => {
      return {
        value: colection[value],
        label: colection[label],
      };
    });
    if (typeof func !== "function") return;

    func(colections);
  }

  // Subscriptions
  realTime({
    staticSchema,
    subscritionSchema,
    graphTableName,
    subscriptionTableName,
  }) {
    let unsubscribe = null;
    if (!staticSchema) return "Adicionar um modelo de schema estatico";
    if (!subscritionSchema) return "Adicionar um modelo para subscrição";
    console.log(staticSchema);
    return (
      <Query query={staticSchema}>
        {({ loading, data, error, subscribeToMore }) => {
          if (!unsubscribe) {
            unsubscribe = subscribeToMore({
              document: subscritionSchema,
              updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;

                let subData = subscriptionData.data[subscriptionTableName];
                const { x, y } = subData;
                subData = { idEstado: x, designacao: y };
                let newValue = [subData, ...prev[graphTableName]];

                return {
                  ...prev,
                  [graphTableName]: newValue,
                };
              },
            });
          }
          console.log(data);
          return data;
        }}
      </Query>
    );
  }
}

var graphQL = new GraphQL();
export default graphQL;
