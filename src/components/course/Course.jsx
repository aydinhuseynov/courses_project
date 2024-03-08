import './course.css'
const Course = ({course}) => {

    const {id,title,description,price,link,image} = course;

  return (
    <div className="course" >
      <div>
        <img src={image} alt="picture course" width={250} height={150} />
        <h4>{title}</h4>
        <p>{description}</p>
        <h3>${price}</h3>
        <a href={link} target="_blank">go to course</a>
      </div>
    </div>
  )
}

export default Course
