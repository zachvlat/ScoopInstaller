import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";

function Home() {
  const [applicationsLists, setApplicationsList] = useState([]);
  const applicationsCollectionRef = collection(db, "applications");

  useEffect(() => {
    const getApplications = async () => {
      const data = await getDocs(applicationsCollectionRef);
      setApplicationsList(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getApplications();
  });

  return (
    <div className='homePage'>
      {applicationsLists.map((applications) => {
        return (
          <div className='post'>
            <div className='postHeader'>
              <div className='title'>
                <img
                  src={applications.appImage}
                  alt=''
                  width='50px'
                  height='50px'
                />
                <h1> {applications.appTitle}</h1>
              </div>
            </div>
            <div
              className='postTextContainer'
              dangerouslySetInnerHTML={{
                __html: applications.appDescription,
              }}></div>
            <div className='postTextCommand'>{applications.appCommand}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
