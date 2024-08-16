import { createClient } from '@supabase/supabase-js'

const supabase = createClient('http://localhost:8000','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE')

const userSignUp = async(email:string,password:string) => {
    const {data, error} = await supabase.auth.signUp({
        email,
        password
    })
    if(error){
        console.log(error)
    }
    else{
        console.log(data)
    }
}

// userSignUp('sujitdhakal@gmail.com','abc@123')

const userSignIn = async(email:string,password:string) => {
    const {data,error} = await supabase.auth.signInWithPassword({
        email,
        password
    })
    if(error){
        console.log(error)
    }
    else{
        console.log(data)
    }
}


const insertData = async(task:string) => {
    await userSignIn('sujitramdhakal59@gmail.com','abc@123')
    const {data: {user}} = await supabase.auth.getUser()
    const {error} = await supabase.from('todos').insert({
        task,
        user_id : user?.id
    })
    if(error){
        console.log(error)
    }
}
// insertData("do cleaning")

const readData = async() => {
    await userSignIn('sujitramdhakal59@gmail.com','abc@123')
    const {data,error} = await supabase.from('workflows_details').select()
    if(error){
        console.log(error)
    }
    else{
        console.log(data)
    }
}
readData()

const insertWorkflow = async(workflow_name:string,workflow_id:Number) => {
    await userSignIn('sujitramdhakal59@gmail.com','abc@123')
    const {data: {user}} = await supabase.auth.getUser()
    const {error} = await supabase.from('workflows_details').insert({
        workflow_id,
        workflow_name
    })
    if(error){
        console.log(error)
    }
}

insertWorkflow('workflow_1',3435)