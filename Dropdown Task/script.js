var states={
    usa:["New York","California","Texas","Florida","Huwai","New Jersey"],
    india:["Assam","Bihar","Karnataka","Odisha","Haryana"],
    pakistan:["Punjab","Sindh","Balochistan","Khyber Pakhtunkhwa"]
};
var city={
    "New York":["New York","Buffalo","Albany","Utica","Yonkers"],
    California:["Los Angeles","San Diego","San jose","Fresno"],
    Texas:["Austin","Huston","Texas city","EI Paso","Eagle Pass"],
    Florida:["Miami","Tempa","Destin","Key West","Naples"],
    Huwai:["Hilo","Hawi","Volcano","Kihei","Lihue"],
    "New Jersey":["Newerk","Trenton","Edison","Clifton"],
    Assam:["Silchar","Dibrugarh","Jorha","Nagaon"],
    Bihar:["Bhagalpur","Patna","Motihari","Bettiah","Darbhanga"],
    Karnataka:["Bangalore","Gulbarga","Mangalore","Hassan","Bijapur"],
    Odisha:["Bhubaneswar","Balasore","Rourkela","Sambalpur","Puri"],
    Haryana:["Faridabad","Panipat","Ambala","Hisar","Gurgaon"],
    Punjab:["Bahawalpur","Faisalabad","Lahore","Multan","Rawalpindi","Attock","Jhang"],
    Sindh:["Karachi","Sukkur","Hyderabad","Larkana","Nawabshah","Jamshoro"],
    Balochistan:["Kalat","Quetta","Sibi","Lasbela","Dera Bugti"],
    "Khyber Pakhtunkhwa":["Abbottabad","Bannu","Kohat","Mansehra","Haripur"]
};
var countrySelect=document.getElementById("country");
var stateSelect=document.getElementById("states");
var citySelect=document.getElementById("city");

function populatestates(){
    stateSelect.innerHTML='<option value="">Select a state</option>';
    citySelect.innerHTML='<option value="">Select a city</option>';

    var selectedCountry=countrySelect.value;
    if(selectedCountry){
        var selectedStates=states[selectedCountry];
        selectedStates.forEach(function(state){
            var option=document.createElement("option");
            option.value=state;
            option.text=state;
            stateSelect.appendChild(option);
        })
    }
}

function populatecities(){
    citySelect.innerHTML='<option value="">Select a city</option>'
    var selectedStates=stateSelect.value;
    if(selectedStates){
        var selectedCities=city[selectedStates];
        selectedCities.forEach(function(city){
            var option=document.createElement("option");
            option.value=city; 
            option.text=city;
            citySelect.appendChild(option);
        })
    }
}