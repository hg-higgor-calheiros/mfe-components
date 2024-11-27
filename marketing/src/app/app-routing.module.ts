import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BannerComponent } from "./components/banner/banner.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";

const routes: Routes = [
    {
      path: "",
      component: BannerComponent,
    },
    { 
      path: "offers",
      component: BannerComponent,
      children: [{
        path: ":id",
          component: ProductDetailComponent
        }
      ]
    }
]

@NgModule({
    imports: [
      RouterModule.forRoot(routes),
    ],
    exports: [RouterModule],
  })
export class AppRoutingModule {}