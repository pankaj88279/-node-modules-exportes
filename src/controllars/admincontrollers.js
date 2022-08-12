


let adminlogic = (req,res)=>{
    res.status(201).json({
        msg:'hello'
    })
 }
 
 let adminorderlogic = (req,res)=>{
    res.status(302).json({
        orderno :'102',
        orderitem :'juice'
    })
 }

 exports.admincustmorecontrollar=adminlogic
exports.adminordercontrollar= adminorderlogic 