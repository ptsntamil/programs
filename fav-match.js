let tamil = {"name":"tamil", fav:["r", "s","t"]};
let allUser = [{"name":"alex", fav:["e", "c","t"]},
{"name":"john", fav:["c", "s","t"]},
{"name":"aravind", fav:["d", "a","t"]}];
let findMatchFav = _ => {
    console.time("fav");
    allUser.forEach(user => {
	   user.fav.every(f => {
	       console.log(f);
		  if(tamil.fav.indexOf(f) > -1) {
			console.log(user.name);
			return false;
		  } else {
		      return true;
		  }
	   })
    });
    console.timeEnd("fav");
}