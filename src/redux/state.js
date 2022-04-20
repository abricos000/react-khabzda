import { parse } from "path";
let store = {  

    _state: {
    messagesPage:{
  
                  dialogsData:[
                      {id:1, name:'Vica'},
                      {id:2, name:'Dima'},
                      {id:3, name:'Vanya'},
                      {id:4, name:'Vica'},
                      {id:5, name:'Kolya'},
                      {id:6, name:'Vica'},
                      {id:7, name:'Vasya'},
                      {id:8, name:'Vica'}
              ],
                  messagesData:[
                      {id:1, text:"Hi"},
                      {id:2, text:"Hi, what is your name?"},
                      {id:3, text:"My name is Petia"},
                      {id:4, text:"My name is Petia"},
                      {id:5, text:"Yoooo"},
                      {id:6, text:"ooooooooooooo"},
                      {id:7, text:"aaaaaaaaaaaaaaaaaaa"}
              ]}
                  ,
    profilePage:{
                  myPostsData:[{id:1, message: "dimas", likes: 100}
                      
                  ],
                  newPostText:''
              }
 },
 _callSubscribe () {
    console.log("12345");
},
SaveMyData(keys,obj){
    localStorage.setItem(keys, JSON.stringify(obj));
},
LoadMyData(keys){
    const newData=JSON.parse(localStorage.getItem('mydata'));
     if(localStorage.key('mydata')!=null)
     {
        this._state.profilePage.myPostsData= newData;
     }
},
 getState(){
     this.LoadMyData('mydata');
     return this._state;
 },
 subscribe (observer) {
    this. _callSubscribe = observer;
        },
 
 

dispatch (action) { //action объект который описывает какое дейсвие совершить , обязателен type: "ADD-Post"
    let newDate = new Date();
    if (action.type === "ADD-POST") {
        let newPost = {
            id:8,
            message:  this._state.profilePage.newPostText,
            likes:0,
            dates: newDate.toLocaleDateString() + " - " + newDate.toLocaleTimeString(),
            cleanID: this._state.profilePage.myPostsData.length+1,
        }
       
        this._state.profilePage.myPostsData.unshift(newPost); /*push(newPost);*/
        this.SaveMyData('mydata',this._state.profilePage.myPostsData);
        //this._state.profilePage.myPostsData=newData;
        //alert( localStorage.getItem('data') );
       // this._state.profilePage.myPostsData=localStorage.getItem("data");
       
        this._callSubscribe(this._state);
        this._state.profilePage.newPostText='';
       
        console.log(JSON.parse(localStorage.getItem('mydata')));
        
    } 
    else if (action.type === "UPDATE-NEW-POST-TEXT"){
        this._state.profilePage.newPostText=action.newText;
    this._callSubscribe(this._state);
    }

}


}


  
   export default store;
   window.store = store;