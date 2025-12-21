
/* 
object = {
  firstName: 'xx',
  lastName: 'xx
}
get properties on object
1. object.firstName
2. object['firstName']

object destructuring
const firstName = object.firstName
const lastName = object.lastName

const { firstName, lastName } = object;
*/
import Button from "../components/Button"

interface IProduct extends React.PropsWithChildren {
  name?: string,
  isLoading: boolean,
  person: {
    city: string,
    ward: string
  },
  city: string,
  ward: string,
  component1: React.ReactNode,
  component2: React.ElementType
}

function Product({ 
  name = 'Default name', 
  isLoading, 
  person, 
  city,
  ward, 
  children,
  component1,
  component2: Component2
}: IProduct) {
  console.log('Product: ', city, ward)
  return (
    <div>
      This is demo pass props <br />

      {/* Name Brid: {props['name-bird']} <br/> */}
      Name: {name} <br />
      isLoading: {isLoading.toString()} <br />
      Children: {children} <br />
      This is component1 : {component1} <br />
      This is component2: {<Component2 />} <br />
    </div>
  )
}


function Props() {
  const dataPerson = {
    city: 'hcm',
    ward: 16
  }
  return (
    <div>
      <h1>Props</h1>

      <Product 
        isLoading={true}
        person={{...dataPerson}}
        name-bird="chicken"
        component1={<Button />} // pass react node
        component2={Button} // pass element type
        {...dataPerson} // speard operator

      >
        this is children
      </Product>
    </div>
  )
}

export default Props