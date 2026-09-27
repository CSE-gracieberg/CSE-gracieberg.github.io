
//links for google maps
const Mountains = {
  "Asheville": "https://www.google.com/maps?q=Asheville+NC&output=embed",
  "Boone": "https://www.google.com/maps?q=Boone+NC&output=embed",
  "Hot Springs": "https://www.google.com/maps?q=Hot+Springs+NC&output=embed",
  "Table Rock": "https://www.google.com/maps?q=Table+Rock+South+Carolina&output=embed"
};
 
const Beaches = {
  "Myrtle Beach": "https://www.google.com/maps?q=Myrtle+Beach+SC&output=embed",
  "Hilton Head": "https://www.google.com/maps?q=Hilton+Head+Island+SC&output=embed",
  "Folly Beach": "https://www.google.com/maps?q=Folly+Beach+SC&output=embed",
  "Wrightsville Beach": "https://www.google.com/maps?q=Wrightsville+Beach+NC&output=embed"
};
 
const typeMap = { Mountains, Beaches };
 
document.getElementById("type-select").addEventListener("change", function (e) {
  showType(e.target.value);
});
 
function showType(typeName) {
  const list = document.getElementById("destination-list");
  list.innerHTML = '';
 
  //hides map when type changes
  document.getElementById("map-container").style.display = 'none';
 
  if (!typeName) return;
 
  const destinations = typeMap[typeName];
 
  for (const name in destinations) {
    const li = document.createElement("li");
    const link = document.createElement('a');
    link.href = "#";
    link.textContent = name;
    link.onclick = function (e) {
      e.preventDefault();
      showDestination(destinations[name]);
    };
    li.appendChild(link);
    list.appendChild(li);
  }
}
 
function showDestination(mapUrl) {
  document.getElementById("map-frame").src = mapUrl;
  document.getElementById("map-container").style.display = 'block';
}
 


