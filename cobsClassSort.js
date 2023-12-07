
class Experiment
{

    TheFunction(type){
        if(type != null){
            type.sort();
            console.log(type);
        }else{
            console.log("not found");
        }
    }

}

const typedata = new Experiment();
typedata.TheFunction();