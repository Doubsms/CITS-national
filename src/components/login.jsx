import {Chip,Radio,Input, Button} from '@material-tailwind/react';
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'
import whatstapp from '../assets/what.png'
function Login({setSide}) {
  return (
    <div>
        <div className='flex items-center my-3 justify-center'>
        <p className='mr-2 font-medium'>Vous etes un : </p>
        <div className='flex'>
            <Chip color='indigo' variant='ghost' value="Patient" className='mx-2 capitalize' icon={<Radio name='type' color='indigo' className='w-4 h-4 -translate-x-2 -translate-y-2' iconProps={{
              "className":"-mt-2 scale-90 -translate-x-[15px]"
            }} />}></Chip>
                        <Chip color='deep-purple' variant='ghost' value="Hopital" className='mx-2 capitalize' icon={<Radio name='type' color='deep-purple' className='w-4 h-4 -translate-x-2 -translate-y-2' iconProps={{
              "className":"-mt-2 scale-90 -translate-x-[15px]"
            }} />}></Chip>
                        <Chip color='green' variant='ghost' value="Personnel Medical" className='mx-2 capitalize' icon={<Radio name='type' color='green' className='w-4 h-4 -translate-x-2 -translate-y-2' iconProps={{
              "className":"-mt-2 scale-90 -translate-x-[15px]"
            }} />}></Chip>
            
        </div>
        </div>
        <div className='flex justify-center flex-col items-center my-5'>
        <h3 className='text-center mt-6 text-lg'>Entrer vos informations</h3>
        <div className='w-[75%] flex flex-col space-y-5 pr-4 py-3'>
            <Input label="Nom d'utilisateur ou adresse email" type='name' color='indigo'></Input>
            <Input label='Mot de passe' type='password' color='indigo'></Input>
            <Button color='indigo' size=''>Envoyer</Button>
        </div>
        </div>
        <div className='text-center my-5'>
          <span className='mb-2'>Ou en utilisant :</span>
          <div className='flex space-x-5 mt-2 justify-center'>
            <img src={facebook} alt="google logo" className='w-[40px] h-[40px] rounded-full duration-100 hover:cursor-pointer hover:scale-90' />
            <img src={whatstapp} alt="what logo" className='w-[40px] h-[40px] rounded-full duration-100 hover:cursor-pointer hover:scale-90' />
            <img src={google} alt="what logo" className='w-[40px] h-[40px] rounded-full duration-100 hover:cursor-pointer hover:scale-90' />
          </div>
        </div>
        <div className='w-full mx-auto text-center'>
          <span>Si vous n'avez pas encore de compte cliquer sur <button className=' font-medium underline text-blue-600 cursor-pointer' onClick={()=>{
            setSide("slide-right")
          }}>s'inscrire</button> </span>
        </div>

    </div>
  )
}

export default Login