
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
import React from "react"
import Button from "../components/atoms/Button"
import Input from "../components/atoms/Input"
import ConfirmModal from "../components/molecules/ConfirmModal"
import SearchBar from "../components/molecules/SearchBar"

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
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpenAddModal, setIsOpenAddModal] = React.useState(false);

  function toggleOpenConfirmModal() {
    setIsOpen(prevState => !prevState)
  }

  function toggleOpenAddModal() {
    setIsOpenAddModal(prevState => !prevState)
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

      <SearchBar startIcon={false}/>

      <Button 
        buttonText="Add Todo"
        onClick={toggleOpenAddModal}
      />

      <Button 
        buttonText="Delete Item"
        onClick={toggleOpenConfirmModal}
      />

      {isOpen && (
        <ConfirmModal 
          onClose={toggleOpenConfirmModal}
          onConfirm={() => {}}
        >
          <div className="flex items-center justify-center p-4 bg-red-100 rounded-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.875 5.75h1.917m0 0h15.333m-15.333 0v13.417a1.917 1.917 0 0 0 1.916 1.916h9.584a1.917 1.917 0 0 0 1.916-1.916V5.75m-10.541 0V3.833a1.917 1.917 0 0 1 1.916-1.916h3.834a1.917 1.917 0 0 1 1.916 1.916V5.75m-5.75 4.792v5.75m3.834-5.75v5.75" stroke="#DC2626" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-gray-900 font-semibold mt-4 text-xl">Are you sure?</h2>
          <p className="text-sm text-gray-600 mt-2 text-center">
              Do you really want to continue? This action<br />cannot be undone.
          </p>
        </ConfirmModal>
      )}

       {isOpenAddModal && (
        <ConfirmModal 
          onClose={toggleOpenAddModal}
          onConfirm={() => {}}
        >
          <h2 className="text-gray-900 font-semibold mt-4 text-xl">Are you sure?</h2>
          <p className="text-sm text-gray-600 mt-2 text-center">
             Are you sure add new item?
          </p>
        </ConfirmModal>
      )}
    </div>
  )
}

export default Props