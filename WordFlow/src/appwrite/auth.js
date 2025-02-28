import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor(){
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectId)

    this.account = new Account(this.client);
  }
  async createAccount({email, password, name}){
    try {
      const userAccount = await this.account.create(ID.unique(),email, password, name);
      if (userAccount) {
        //another method we will call
        return this.login({email,password});
      }
      else{
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }
  async login({email,password}){
    try {
      return await this.account.createEmailPasswordSession(email, password); 
    } catch (error) {
      throw error
    }
  }

  async getCurrentUser(){
    try {
      return await this.account.get();
    } catch (error) {
      console.log("appwrite::service:: getCurrentUser::error", error);
    }
    return null;
  }

  async logout(){
    try {
      const session = await this.account.getSession('current');
      console.log('Current Session:', session.$id);
      await this.account.deleteSession(session.$id);

      
    } catch (error) {
      console.log("apprite service::logout::error", error)
    }
  }
}
const authService = new AuthService();

export default authService;


