import { useState } from "react";
import "./App.css";
import UserProfile from "./components/UserProfile";
import ContactForm from "./components/ContactForm";
import Counter from "./components/counter";



export default function App() {

 
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center mt-50">
        
        <UserProfile />
        <ContactForm />
        <Counter />
        
      </div>
    </>
  )

}

