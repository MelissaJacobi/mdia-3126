"use client" //don't forget this!!!
import { useState } from "react";

//we will only need this one page

// Midterm TODO
// - add button
// - fetch data
// - function to add data to state
// - responsive
// - Display the data
// - function to clear data
// - components for empty state
// - component for data state
// - error handling if the data doesn't come back (keener marks STRETCH GOALS)

//everything is built right in this page but its up to you on the midterm to organize it all with atomic design

export default function Home() {

  //if use state !null, probably fetching or loading data, or have data
  //if useState === data, we can display our data
  const [astronomyData, setAstronomyData] = useState(null);
  const [loading, setLoading] = useState(null);
  
  async function fetchAstronomyData() {
    //build the function that grabs the data
    setLoading(true);
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5"); //use await because you are getting the data from somewhere else

    const data = await response.json();

    setAstronomyData(data);
    setLoading(false); 
  }

  const DisplayAstronomyData = () => {
    //display if we have data
    //loading state (maybe data?)
    //fulfilled state (data exists)
    //empty state
    if(loading) return <div>Loading!</div>
    
    if(astronomyData){
      //title, url, explanation
      const formattedData = JSON.stringify(astronomyData);
      const dataThatIsFormattedForDisplay = [];
      astronomyData.forEach((entry, i) => {
        dataThatIsFormattedForDisplay.push(
        <article key={i}>
          <img src={entry.url}></img>
          <h3>{entry.title}</h3>
          <p>{entry.explanation}</p>
        </article>
        
        );
    
      });

      return<section>{dataThatIsFormattedForDisplay}</section>
    } 
    return (
      <div>Empty, no data fetched!</div>
    );
  }

  const Header = () => {
    //building the UI that grabs the data (this would normally be in a separarte component)
    // if you have more than one line in the arrow function don't forget to add a return!!!
    return (
      <header>
        Welcome to my midterm prep!
        <br />
        <button className="border-white border-solid border-2 p-2 m-2"
          disabled={loading}
          onClick={fetchAstronomyData}>
          {loading? 'Fetching...' : "Fetch Stuff!"}
        </button> {/** this button should clear the astronomy data as well it should be more conditional */}
      </header>
      );
    
  }

  return (

     //you don't have to use tailwind in the exam you can just use normal css
    <div className="m-8">
      <Header />
      <DisplayAstronomyData />
    </div>
  );
}
