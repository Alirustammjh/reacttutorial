import { useActionState, useEffect } from "react";

const Handleuseactionstate = () => {

    
    // const HandleFormData = async (previousdata,formdata) =>{
    //     let name = formdata.get('name');
    //     let password = formdata.get('password');
    //     await new Promise(res => setTimeout(res,2000))
    //     console.log("Handle submit called",name,password);
    //     // if(name && password){
    //     //     return {message: 'Data Submitted'}
    //     // }else{
    //     //     return {error: 'Faild To Submitted , Please Enter Proper valid deatils'}
    //     //     }
    //     // }

    // }
    const HandleFormData = async (previousdata, formdata) => {
    let name = formdata.get('name');
    let password = formdata.get('password');

    await new Promise(res => setTimeout(res, 2000));
    //console.log("Handle submit called", name, password);

    if (name && password) {
        return { message: 'Data Submitted' , name, password };
    } else {
        return { error: 'Failed To Submit, Please Enter Proper Valid Details' };
    }

    
};

    const[data,action,pending] =  useActionState(HandleFormData,undefined);
    // console.log(data);
    useEffect(() => {
     if (data) console.log("Form result:", data);
    }, [data]);

    return(
        <div>
            <h1>Use Action State Example</h1>
           
           <form action={action}>
             <input defaultValue={data?.name} type="text" placeholder="Enter Your Name" name="name"/>
             <input defaultValue={data?.password} type="password" placeholder="Enter Your Password"name="password"/>
             <button disabled={pending}>Submit</button>
             {
                data?.error && <span style={{color:'red'}}>{data?.error}</span>
             }
             {
                data?.message && <span style={{color:'green'}}>{data.message}</span>
                
             }
           </form>

           <hr/>
           <h3>Name : {data?.name}</h3>
           <h3>Password : {data?.password}</h3>
        
        <hr/>
        </div>
    )
}

export default Handleuseactionstate;
