import mongoose from "mongoose";

const dashboardSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    resumeScore:{
        type:Number,
        default:0
    },

    jobsMatched:{
        type:Number,
        default:0
    },

    aiSessions:{
        type:Number,
        default:0
    },

    careerLevel:{
        type:String,
        default:"Beginner"
    },

    skills:{
        overall:{
            type:Number,
            default:0
        },

        react:{
            type:Number,
            default:0
        },

        typescript:{
            type:Number,
            default:0
        },

        nodejs:{
            type:Number,
            default:0
        },

        problemSolving:{
            type:Number,
            default:0
        },

        sql:{
            type:Number,
            default:0
        }
    },

    activities:[
        {
            title:String,
            desc:String,
            time:String
        }
    ],

    recommendation:{
        type:String,
        default:""
    }

},{timestamps:true});

export default mongoose.model("Dashboard",dashboardSchema);