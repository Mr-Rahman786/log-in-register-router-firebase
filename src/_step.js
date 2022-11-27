/*
#Basic Context Api set Up=============
1.Context Api:Share auth state with other components (accross the application);
2. Create a UserContext file (under the create context provider )
3. set the UserContext file in index.js
4 . To consuemed the context: export the AuthContext from UserContext
6 . Now We can use anywhere the UserContext /usecontext hook 
{
    const {user}=useContext(AuthContext)

}


#Auth config create 
1.Use getAuth by passing the app from firebase config
2.create a function name of creatUser and return the creatUserWithEmailAndPassword

*/