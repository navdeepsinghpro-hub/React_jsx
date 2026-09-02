import Card from './components/Card'


const jobs = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrJovWwWRCdXgXSaeHpeEkAZClChH5Li8YPZevB7hTEA&s=10",
    name: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://i0.wp.com/www.printmag.com/wp-content/uploads/2012/09/2a34d8_0780274467a2423dad8f53021b21caadmv2.png?fit=376%2C375&quality=80&ssl=1",
    name: "Microsoft",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$45/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    name: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$40/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
    name: "Meta",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$32/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2f0U6HVw6nPZh0FFt2_rtoIViUA-1J1cvgMkeqWhwJkWbrZSzrpQgCk4&s=10",
    name: "Netflix",
    datePosted: "10 weeks ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$50/hour",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/021/514/722/non_2x/ibm-brand-symbol-software-computer-logo-design-illustration-free-vector.jpg",
    name: "IBM",
    datePosted: "4 days ago",
    post: "Data Scientist",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$42/hour",
    location: "Chandigarh, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbCssfTJIp9RiRgE5FtiftQMEfQx_rzov_R48esB1rqA&s=10",
    name: "Adobe",
    datePosted: "3 weeks ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$48/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png",
    name: "Spotify",
    datePosted: "6 days ago",
    post: "Web Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$30/hour",
    location: "Kolkata, India"
  },
  {
    brandLogo: "https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png",
    name: "Uber",
    datePosted: "8 weeks ago",
    post: "Python Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$38/hour",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfDnHxaiWDSP12X4w_hN3tSE4JkgLTt6wfJDED8D8IOg&s=10",
    name: "Salesforce",
    datePosted: "10 weeks ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$46/hour",
    location: "Mumbai, India"
  }
];

const App = () => {
  return (
    <div className='parent'>
      {jobs.map(function(elem, idx){
        return <div key={idx}>
          <Card company={elem.name} post={elem.post} brand={elem.brandLogo} posted={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
        </div>
      })}
    </div>
  )
}

export default App
