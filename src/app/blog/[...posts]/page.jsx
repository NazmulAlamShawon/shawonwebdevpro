const page = ({params}) => {
  console.log(params)
  return (
    <div>post page{params.id} test</div>
  )
}
export default page