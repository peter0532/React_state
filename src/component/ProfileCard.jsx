

const ProfileCard = () => {
  const profile = {
    picture: "https://media.istockphoto.com/id/629515948/photo/weekends-are-my-time-to-be-connected.jpg?s=612x612&w=0&k=20&c=hAWfZAfTmUo0bKwTSEMRTzrw_awcDRr0VXCDpj7Yx_s=",
    name: "Peter Parker",
    id: 1,
    age: 32,
    location: "New York",
    career: "Software Engineer",
    about: "Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly.",
  }

  const { name, picture, age, location, career, about } = profile

  return (
    <div>
      <img width= "250px" src={picture} alt="Profile" />
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
      <p>Career: {career}</p>
      <p>About: {about}</p>
    </div>
  )
}

export default ProfileCard