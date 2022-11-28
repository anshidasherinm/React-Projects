import Layout from "../components/layout/Layout";
import { MongoClient } from "mongodb";
import MeetUpList from "../components/meetups/MeetupList";
import React, { useEffect, useState } from "react";
import Head from "next/head";
// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A First MeetUp",
//     image:
//       "https://woocommerce.com/wp-content/themes/woo/images/wc-meetups/host-meetup.jpg",
//     address: "Some address 5, 12345 Some City",
//     description: "This is a first meetup",
//   },

//   {
//     id: "m2",
//     title: "A Second MeetUp",
//     image:
//       "https://woocommerce.com/wp-content/themes/woo/images/wc-meetups/host-meetup.jpg",
//     address: "Some address 10, 1234509 Some City",
//     description: "This is the second meetup",
//   },
// ];

function HomePage(props) {
  //   const [loadedMeetups, setLoadedMeetups] = useState([]);
  //   useEffect(() => {
  //     //send a http request and fetch data
  //     setLoadedMeetups(DUMMY_MEETUPS);
  //   }, []);

  return (
    <React.Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of higly active React meetups!"
        />
      </Head>
      <Layout>
        {/* <MeetUpList meetups={loadedMeetups} />; */}
        <MeetUpList meetups={props.meetups} />;
      </Layout>
    </React.Fragment>
  );
}

//method2: prefered when request object is needed to be accessed , if data changs every second and when revalidate doesnt help either [SERVER SIDE PROPS]
//this function will not run during the build process and always on the server after deployement
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   //fetch data from an api
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     //revalidate cannot be setted here and it doesn't make a sense here
//   };
// }

// method 1 : preferd when dont need access to request object and the data changes continously : faster [STATIC PROPS]
// getStaticProps is called before calling the component function
// DATA FETCHING AND PRE-RENDDERING FEATURE IS EXPLAINED HERE
export async function getStaticProps() {
  //this will also have a context in which it doen't have request or response but a params
  //any code written here will not execute on the client side
  //this code is executed during the build process

  //eg:fetch data from api

  const client = await MongoClient.connect(
    "mongodb+srv://anshida:anshida123@cluster0.wrsppj1.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      // meetups: DUMMY_MEETUPS,
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    }, //the props obtained from the component will be set as a props here
    //IMPORTNAD : THESE OBTAINED PROPS WILL BE SET AS THE PROPS OF THE COMPONENT
    revalidate: 10,
    //to unlock the feature of incremental static generation
    // revalidate: 10 i given next js will wait for 10 s until it regenerates this page fro an incoming request
    //ie if there are requests coming to this page.each 10 seconds the page will be newly loaded replacing old pages
  };
}

export default HomePage;
