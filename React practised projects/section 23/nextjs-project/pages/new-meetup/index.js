//our-domain.com/new-meetup
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
function NewMeetupPage() {
  const router = useRouter();
  async function addMeetupHandler(enteredMeetupData) {
    // console.log(enteredMeetupData);
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }); //later part must be same as that of the folder name this js file is contained
    // console.log(enteredMeetupData);
    const data = await response.json();
    console.log(data);
    router.push("/");
  }
  return (
    <React.Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking oppurtunities"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </React.Fragment>
  );
}

export default NewMeetupPage;

// our-domain.com/new-meetup
// import { useRouter } from "next/router";

// import NewMeetupForm from "../../components/meetups/NewMeetupForm";

// function NewMeetupPage() {
//   const router = useRouter();

//   async function addMeetupHandler(enteredMeetupData) {
//     const response = await fetch("/api/new-meetup", {
//       method: "POST",
//       body: JSON.stringify(enteredMeetupData),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     const data = await response.json();

//     console.log(data);

//     router.push("/");
//   }

//   return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
// }

// export default NewMeetupPage;
