import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_service/api.service';
declare var swal: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  gifsList;
  search='';
  showMsg=true;
  showLoader= true;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  searchGifs(){
    this.showLoader = false;
    let response;
    
    if(this.search !==  ""){

      this.gifsList=[];
      this.apiService.searchGifsBasedOnText(this.search).subscribe(res=>{
        response=res;
        
        if(response.meta.msg === "OK" && response.meta.status === 200){
          this.gifsList= response.data;
          this.showLoader = true;
          if(this.gifsList.length===0){
            this.showMsg = false;
          } else{
            this.showMsg = true;
          }
        } else{
          swal.fire('Unable to fetch data!');

        }
        
      },error=>{
        this.showLoader = true;
        this.showMsg = true;
        swal.fire('Something Went Wrong!');
      })
    }
   
  }

}
