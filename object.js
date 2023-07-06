//Create an object with the following functionality
// Ability to add student details and 3 subject marks
// Methods to find the student with the least and highest total

let details={
  data:[],
  addStudent: function(name, phy, chem, math){
    let obj={}
    obj["name"]=name;
    obj["marks"]=[phy, chem, math];
    obj["total"]=phy+chem+math;
    this.data.push(obj)
    
    // Write the code here
  },
   highandlow:function(){
     let high=this.data[0]["total"];
     let name;
     for(let i=0; i<this.data.length; i++){
       let total=this.data[i]["total"];
       if(total>high){
         high=total;
          name=this.data[i].name;
       }
     }
     console.log("name = "+name+" high = "+ high)

     let low=this.data[0]["total"];
     let name1=this.data[0]["name"];
     for(var i=0; i<this.data.length; i++){
       let total=this.data[i]["total"];
       if(total<low){
         low=total;
         name1=this.data[i].name;
       }
     }
     console.log("name = " + name1 +" low = "+ low)
   }
 
};


details.addStudent("sonu", 80, 70 , 78)
details.addStudent("arrya", 70, 70 , 58)
details.addStudent("krish", 80, 90 , 78)
console.log(details)
console.log(details.highandlow())

