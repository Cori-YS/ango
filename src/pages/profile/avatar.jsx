import React, { useState, useRef, useEffect} from 'react'
import "./style.css"
import { useField} from '@unform/core';
export default function Avaatar() {

  const ref = useRef();
  const { defaultValue, registerField } = useField('avatar');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);


  useEffect(() => {
    if (ref.current) {
     registerField({
       name: 'avatar_id',
       ref: ref.current,
       
       path: 'dataset.file',
     });
    }
  }, [ref.current]);

 function handleChenge(e){
  const data = new FormData();

  data.append('file', e.target.files[0]);
//  const response = await api.post('files', data);
//  const { id, url } = response.data;
//
  //setFile(id);
console.log(e.target.files[0],"teste")
  setPreview(e.target.files[0]);
 }
  return (
    <div class="col-md-3 col-sm-3 ponter"  >
      <label htmlFor="avatar" style={{cursor:"pointer"}}>
                  <img src={preview || "img/user.jpg" } alt="" class="img-responsive" />
                  <input type="file"
                  id="avatar"
                  accept="image/*"
                  data-file={file}
                  onChange={handleChenge}
                  ref={ref}
                  style={{display:"none"}}
                  />
                  </label>
                </div>
  )
}
