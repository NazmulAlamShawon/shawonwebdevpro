const page = ({params}) => {
  console.log(params)
  return (
    <div>post page{params.id}</div>
  )
}
export default page