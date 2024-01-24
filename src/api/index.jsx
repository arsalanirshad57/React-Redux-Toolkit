import Chance from "chance";

const chance = Chance()

const fakeNewUser = () => {
    // console.log(chance.name({middle:true}))
    return  chance.name({ middle: true });
       
   
}
// fakeNewUser()
export { fakeNewUser }