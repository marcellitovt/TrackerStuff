async function fetchData() {
    const res=await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
    const record=await res.json();
    document.getElementById("date").innerHTML="FU Perbaikan PTM";
    document.getElementById("areaName").innerHTML="Setup meet dengan tim FE";
    document.getElementById("latestBy").innerHTML="Senin, 21 Agustus 2023";
}
fetchData();