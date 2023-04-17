import { render,screen } from "@testing-library/react"
import { Greet } from "./Greet";

// test('Greet renders correctly',()=>{
//   render(<Greet/>);
//   const linkElement=screen.getByText(/hello/i);
//   expect(linkElement).toBeInTheDocument();
// })


//TDD
describe.only('Greet',()=>{
test('Greet renders correctly',()=>{
  render(<Greet/>);
  const linkElement=screen.getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
})

test('renders correctly name',()=>{//test.skip test.only
    render(<Greet name='Vishwas'/>);
    const linkElement=screen.getByText('Hello Vishwas');
    expect(linkElement).toBeInTheDocument();
  })

})