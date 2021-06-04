export default (req,res) => {
    console.log(req);
    if(req.method === "GET"){
        console.log(req.query);

    }else if (req.method === "POST"){

    }

    res.status(200).json({user: "david"})
}
