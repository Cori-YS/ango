import React, { useState, useEffect, useMemo} from "react";
import { Link } from "react-router-dom";
import { useParams} from 'react-router-dom'
import Api from '../../services/api'
import { Modal} from 'antd';
import { useAuth} from '../../auth'

import {
  Container,
  Wrapper,
  LinkDinIcon,
  SearchInput,
  HomeIcon,
  NotificationIcon,
  ProfileCircle,
  CaretDownIcon,
  Badge,
  ContainerNotif,
  NotificationList,
  Notification,
  Scroll
} from "./styles";
//import Api from "";
import {parseISO, formatDistance} from "date-fns";
import pt from "date-fns/locale/pt";
const DesktopHeader= () => {
  const [visible, setVisible]= useState(false);
  const [notifications, setNotifications]= useState([]);

/**  const hasUnread = useMemo(
    ()=> !!notifications.find( notification => notification.read ===false)
    [notifications]
  ) */
function handleVisible(){
 
  setVisible(!visible)
}
/** useEffect(()=>{
   async function loadNotfication(){
  //  const response = await api.get('notifications');
    const data = response.data.map(notification =>({
      ...notification,
      timeDistance:formatDistance(
        parseISO(notification.createdAt),
        new Date(),
        {addSuffix:true, locale:pt}
      ),
      
    }))
   setNotifications(data)
   }

   loadNotfication();
 },[])

 async function handleMArkAsRead(id){
//await api.put(`notifications${id}`);

setNotifications(
  notifications.map(notification => 
    notification._id ===id ? {...notification, read:true} :notification
    )
)
 } */

 
 const { getUser} =useAuth()
 const [user, setUser] = useState({})

 useEffect(()=>{
  setUser(getUser())  
},[])


  return (
    <Container>
      <Wrapper>
        <div className="left">
          <Link to="/principal">
          <h1 style={{color: '#fff', fontSize: '24px'}}>AngoSalo</h1>
          </Link>

          <Link to="/procurar">
          <SearchInput placeholder="pesquisar" />
          </Link>
          
        </div>
        <div className="right">
          <nav>
            <Link to="/principal">
            <button className="active">
              <HomeIcon />
            </button>
            </Link>
            <ContainerNotif>
               {/**hasUnread */}
            <Badge onClick={handleVisible}>
              <NotificationIcon />

              </Badge>
              <NotificationList visible={visible}>
                <Scroll>

                  { /**notifications.map(notification =>(
                     <Notification key={notification._id} unread={!notification.read}>
                     <p>{notification.content}</p>
                     <time>{notification.timeDistance}</time>
                     {!notification.read && (<button type="button" onClick={()=>handleMArkAsRead(notification._id)}>Marcar como lida</button>)}
                     
                   </Notification>
                  )) **/}

                  <Notification>
                    <p>sem notificações</p>
                    <button type="button">Marcar como lida</button>
                  </Notification>
                  </Scroll>
                </NotificationList>

              </ContainerNotif>
            <Link to={`/perfil/${user.id}`}>
            <button>
              <span>Perfil</span>
            </button>
            </Link>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
};

export default DesktopHeader;
