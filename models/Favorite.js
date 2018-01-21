const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const FavoriteSchema = Schema({
    author: {
        type: Schema.Types.ObjectId, ref: "User",
        required: true
    },
    taskId: {
        type: Schema.ObjectId,
        required: true
    }
});      

const Favorite = mongoose.model("Favorite",FavoriteSchema);
module.exports = Favorite;