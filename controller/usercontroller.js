var user_model = require('../model/usermodel')

exports.register_user = async (req,res) => {

     for (let i=0 ; i<100 ; i++){

          req.body.no = i

          var data = await user_model.create(req.body);
     }


     res.status(200).json({
          status: 'success',
          data
     })
}

exports.start_user = async (req, res) => {

     var scan = (+req.query.page -1)*10

     var data = await user_model.find().skip(scan).limit(10)

     res.status(200).json({
          status: 'success',
          data
     })
}