const express= require("express")
const router= express.Router();
 const Workerlogin=require("../Model/wlogin")
 const WorkerRegister=require("../Model/wregister")

 const Servicelogin=require("../Model/slogin")
 const ServiceRegister=require("../Model/sregister")
 const AddService=require("../Model/addservice")






router.get('/', (req, res) => {
    res.send('Hello World!')
  })


  router.get('/sami', (req, res) => {
    res.send('Hello Samiullah')
  })

  router.post('/wlogin', async (req, res) => {

                try {

                        const {wemail, wpassword } = req.body;
                        if(!wemail || !wpassword){
                                return res.status(400).json({ error :" plz Fill the data"})
                                
                        }
                        const userlogin =await Workerlogin.findOne({wemail:wemail});
                        console.log(userlogin);
                        if(!userlogin){
                                res.status(400).json({error:"user error"});

                        }else{
                            res.json({ message : " user Login Successfully"})
                        }
                    
                } catch (error) {
                    
                }


    })



    router.post('/slogin', async (req, res) => {

        try {

                const {semail, spassword } = req.body;
                if(!semail || !spassword){
                        return res.status(400).json({ error :" plz Fill the data"})
                        
                }
                const userlogin =await Servicelogin.findOne({semail:semail});
                console.log(userlogin);
                if(!userlogin){
                        res.status(400).json({error:"user error"});

                }else{
                    res.json({ message : " user Login Successfully"})
                }
            
        } catch (error) {
            
        }


})




  router.post('/wregister', async (req, res) => {

    const {wname, wlname, wemail, wpassword, wcpassword}=req.body;
    if(!wname || !wlname || !wemail || !wpassword || !wcpassword){
        return res.status(422).json({error: "Plz Filled the all requirement"});
    }


            try {

                    const userExist = await  WorkerRegister.findOne({wemail:wemail});
                    if(userExist){

                                    return res.status(422).json({error:"Email  Already Register "});
                    }
                const  user=new this.use({wname, wlname, wemail, wpassword,wcpassword})
                await this.WorkerRegister.save();
                res.status(201).json({message: " User Register Successfuly"});

                
            } catch (error) {
                console.log(err);
                
            } 
   
  })


        
  router.post('/sregister', async (req, res) => {

    const {Sname, Slname, Semail, Spassword, Scpassword}=req.body;
    if(!Sname || !Slname || !Semail || !Spassword || !Scpassword){
        return res.status(422).json({error: "Plz Filled the all requirement"});
    }


            try {

                    const userExist = await ServiceRegister.findOne({Semail:Semail});
                    if(userExist){

                                    return res.status(422).json({error:"Email  Already Register "});
                    }
                const  user=new this.use({Sname, Slname, Semail, Spassword,Scpassword})
                await this.ServiceRegister.save();
                res.status(201).json({message: " User Register Successfuly"});

                
            } catch (error) {
                console.log(err);
                
            } 
   
  })



  //Add service


  
  router.post('/addservice', async (req, res) => {

    const {WorkName, WorkA, WorkM, WorkN}=req.body;
    if( !WorkNamw|| !WorkA || !WorkM|| !WorkN){
        return res.status(422).json({error: "Plz Filled the all requirement"});
    }


            try {

                
                const  user=new this.use({ WorkName, WorkA,WorkM,WorkN})
                await this.AddService.save();
                res.status(201).json({message: " Service Added  Successfuly"});

                
            } catch (error) {
                console.log(err);
                
            } 
   
  })

  module.exports=router