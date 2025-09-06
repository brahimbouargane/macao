<?php

namespace Database\Seeders;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductType;
use App\Models\Reference;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{

    public $parent_categories = [];
    public $child_categories = [];
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        //User::factory(10)->create();

        // User::factory()->create([
        //    'name' => 'Admin',
        //    'email' => 'admin@admin.com',
        //    'password' => '123',
        //    'email_verified_at' => \now()
        // ]);

        DB::statement("SET foreign_key_checks=0");
        DB::table('categories')->truncate();
        DB::table('category_category')->truncate();
        DB::table('category_product')->truncate();
        DB::table('products')->truncate();
        DB::table('brands')->truncate();
        DB::table('media')->truncate();
        DB::table('product_types')->truncate();

        DB::statement("SET foreign_key_checks=1");

        $data = [
            "Confiserie" =>  [
                // ?Sucettes
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Sucettes",
                    "product_name" => "MAC POP FRUITÉ + CRÈME",
                    "product_description" => "Sucettes Fruitées à la Crème",
                    "ref" => "0101S001",
                    "weight" => "1100",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "1010 Carton",
                    "tc_40" => "2180 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Sucettes",
                    "product_name" => "MAC POP FRUITÉ + CRÈME",
                    "product_description" => "Sucettes Fruitées à la Crème",
                    "ref" => "0101S001",
                    "weight" => "1450",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "850 Carton",
                    "tc_40" => "1800 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Sucettes",
                    "product_name" => "MAC POP FRUITÉ + YAOURT",
                    "product_description" => "Sucettes Fruitées à la Crème Yaourt",
                    "ref" => "0101S010",
                    "weight" => "1100",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "1010 Carton",
                    "tc_40" => "2180 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Sucettes",
                    "product_name" => "MAC POP FRUITÉ + YAOURT",
                    "product_description" => "Sucettes Fruitées à la Crème Yaourt",
                    "ref" => "0101S010",
                    "weight" => "1450",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "850 Carton",
                    "tc_40" => "1800 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Sucettes",
                    "product_name" => "MAC POP CARAMEL LAIT",
                    "product_description" => "Sucettes Au Lait",
                    "ref" => "0101S020",
                    "weight" => "1100",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "1010 Carton",
                    "tc_40" => "2180 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Sucettes",
                    "product_name" => "ORO POP SUCETTES FRUITÉES",
                    "product_description" => "Assortiment de Sucettes Fruitées",
                    "ref" => "0101S050",
                    "weight" => "1450",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "850 Carton",
                    "tc_40" => "1800 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Sucettes",
                    "product_name" => "ORO POP SUCETTES FRUITÉES FOURRÉES BUBBLE GUM",
                    "product_description" => "Assortiment De Sucettes Fruitées Fourrées Bubble Gum",
                    "ref" => "0101S051",
                    "weight" => "1450",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "850 Carton",
                    "tc_40" => "1800 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Sucettes",
                    "product_name" => "ORO POP SUCETTES AU GOÛT CERISE FOURRÉES BUBBLE GUM",
                    "product_description" => "Sucettes Au Goût Cerise Fourrées Bubble Gum",
                    "ref" => "0101S055",
                    "weight" => "1450",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "850 Carton",
                    "tc_40" => "1800 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Sucettes",
                    "product_name" => "ORO POP SUCETTES AU GOÛT COLA",
                    "product_description" => "Sucettes Au Goût Cola",
                    "ref" => "0101S053",
                    "weight" => "1450",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "850 Carton",
                    "tc_40" => "1800 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Sucettes",
                    "product_name" => "MEGA POP",
                    "product_description" => "Assortiment de Sucettes",
                    "ref" => "0101 SE 060",
                    "weight" => "1800",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "813 Carton",
                    "tc_40" => "1700 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Sucettes",
                    "product_name" => "MEGA POP",
                    "product_description" => "Assortiment de Sucettes",
                    "ref" => "0101 SE 061",
                    "weight" => "1800",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "813 Carton",
                    "tc_40" => "1700 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Sucettes",
                    "product_name" => "MEGA POP",
                    "product_description" => "Assortiment de Sucettes",
                    "ref" => "0101 SE 062",
                    "weight" => "1800",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "813 Carton",
                    "tc_40" => "1700 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Sucettes",
                    "product_name" => "MEGA POP",
                    "product_description" => "Assortiment de Sucettes",
                    "ref" => "0101 SE 063",
                    "weight" => "1800",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "813 Carton",
                    "tc_40" => "1700 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Sucettes",
                    "product_name" => "MEGA POP",
                    "product_description" => "Assortiment de Sucettes",
                    "ref" => "0101 SE 064",
                    "weight" => "1800",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "813 Carton",
                    "tc_40" => "1700 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Sucettes",
                    "product_name" => "MEGA POP",
                    "product_description" => "Assortiment de Sucettes",
                    "ref" => "0101 SE 065",
                    "weight" => "1800",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "813 Carton",
                    "tc_40" => "1700 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Sucettes",
                    "product_name" => "MEGA POP",
                    "product_description" => "Assortiment de Sucettes",
                    "ref" => "0101 SE 066",
                    "weight" => "1800",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "813 Carton",
                    "tc_40" => "1700 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Sucettes",
                    "product_name" => "MAC POP",
                    "product_description" => "Assortiment de Sucettes (Mangue, Fruit de la passion, Lait, Fruits Mixtes, Yaourt)",
                    "ref" => "0101 S 034",
                    "weight" => "0",
                    "packaging" => "6 x Boîte carton de 100 pièces / Carton",
                    "tc_20" => "1260 Carton",
                    "tc_40" => "2400 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Sucettes",
                    "product_name" => "MAC POP",
                    "product_description" => "Assortiment de Sucettes (Mangue, Fruit de la passion, Lait, Fruits Mixtes, Yaourt)",
                    "ref" => "0101 S 033",
                    "weight" => "0",
                    "packaging" => "6 x Boîte carton de 100 pièces / Carton",
                    "tc_20" => "1260 Carton",
                    "tc_40" => "2400 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Sucettes",
                    "product_name" => "MAC POP",
                    "product_description" => "Assortiment de Sucettes (Mangue, Fruit de la passion, Lait, Fruits Mixtes, Yaourt)",
                    "ref" => "0101 S 032",
                    "weight" => "0",
                    "packaging" => "6 x Boîte carton de 100 pièces / Carton",
                    "tc_20" => "1260 Carton",
                    "tc_40" => "2400 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Sucettes",
                    "product_name" => "MAC POP",
                    "product_description" => "Assortiment de Sucettes (Mangue, Fruit de la passion, Lait, Fruits Mixtes, Yaourt)",
                    "ref" => "0101 S 031",
                    "weight" => "0",
                    "packaging" => "6 x Boîte carton de 100 pièces / Carton",
                    "tc_20" => "1260 Carton",
                    "tc_40" => "2400 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Sucettes",
                    "product_name" => "MAC POP",
                    "product_description" => "Assortiment de Sucettes (Mangue, Fruit de la passion, Lait, Fruits Mixtes, Yaourt)",
                    "ref" => "0101 S 030",
                    "weight" => "0",
                    "packaging" => "6 x Boîte carton de 100 pièces / Carton",
                    "tc_20" => "1260 Carton",
                    "tc_40" => "2400 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Sucettes",
                    "product_name" => "MAC POP FRUITÉ + CRÈME",
                    "product_description" => "Sucettes Fruitées à la Crème",
                    "ref" => "0601S004",
                    "weight" => "160",
                    "packaging" => "15 x Sachet de 12 pièces / Carton",
                    "tc_20" => "1010 Carton",
                    "tc_40" => "2180 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Sucettes",
                    "product_name" => "MAC POP FRUITÉ + YAOURT",
                    "product_description" => "Sucettes Fruitées à la Créme Yaourt",
                    "ref" => "0601S013",
                    "weight" => "160",
                    "packaging" => "15 x Sachet de 12 pièces / Carton",
                    "tc_20" => "1010 Carton",
                    "tc_40" => "2180 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Sucettes",
                    "product_name" => "ORO POP FRUITÉES",
                    "product_description" => "Sucettes Fruitées",
                    "ref" => "0101S060",
                    "weight" => "725",
                    "packaging" => "15 x Sachet de 50 pièces / Carton",
                    "tc_20" => "1020 Carton",
                    "tc_40" => "2100 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Sucettes",
                    "product_name" => "ORO POP Bubble Gum",
                    "product_description" => "Sucettes Fruitées Fourrées Bubble Gum",
                    "ref" => "0101S061",
                    "weight" => "725",
                    "packaging" => "15 x Sachet de 50 pièces / Carton",
                    "tc_20" => "1020 Carton",
                    "tc_40" => "2100 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Sucettes",
                    "product_name" => "TOFFEE TOP.",
                    "product_description" => "Toffees Au Lait",
                    "ref" => "0101B061",
                    "weight" => "400",
                    "packaging" => "24 x Sachet / Carton",
                    "tc_20" => "750 Carton",
                    "tc_40" => "1560 Carton"
                ],

                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Sucettes",
                    "product_name" => "MAC POP CARAMEL LAIT",
                    "product_description" => "Sucettes Au Lait",
                    "ref" => "0101S020",
                    "weight" => "1450",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "850 Carton",
                    "tc_40" => "1800 Carton"
                ],

                // ?Pate a macher
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Pâte à mâcher",
                    "product_name" => "TOFITA FRUITÉ",
                    "product_description" => "Pâte à Mâcher Fruitée",
                    "ref" => "0101B51",
                    "weight" => "800",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "750 Carton",
                    "tc_40" => "1600 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Pâte à mâcher",
                    "product_name" => "TOFITA FRUITÉ.",
                    "product_description" => "Pâte à Mâcher Fruitée",
                    "ref" => "0101B52",
                    "weight" => "400",
                    "packaging" => "24 x Sachet / Carton",
                    "tc_20" => "590 Carton",
                    "tc_40" => "1280 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Pâte à mâcher",
                    "product_name" => "TOFITA FRUITÉ..",
                    "product_description" => "Pâte à Mâcher Fruitée",
                    "ref" => "0601I42",
                    "weight" => "150",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "3130 Carton",
                    "tc_40" => "6720 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Pâte à mâcher",
                    "product_name" => "TOFITA CREAMY CHOCO",
                    "product_description" => "Pâte à Mâcher Goût Chocolat",
                    "ref" => "0101B057",
                    "weight" => "800",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "3130 Carton",
                    "tc_40" => "6720 Carton"
                ],

                // ?gommees gelifiees
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "REGALO Tubo Pika Fruity 200P",
                    "product_description" => "Gélifiées / Jellies",
                    "ref" => "0103GE24",
                    "weight" => "0",
                    "packaging" => "6 x Boîte plastique de 200 pièces / Carton",
                    "tc_20" => "1300 Carton",
                    "tc_40" => "2600 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "REGALO Tubo Pika Fruity 100P",
                    "product_description" => "Gélifiées / Jellies",
                    "ref" => "0103GE037",
                    "weight" => "0",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "1300 Carton",
                    "tc_40" => "2600 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "REGALO Tubo Brillo Fruity 200P",
                    "product_description" => "Gélifiées / Jellies",
                    "ref" => "0103GE025",
                    "weight" => "0",
                    "packaging" => "6 x Boîte plastique de 200 pièces / Carton",
                    "tc_20" => "1300 Carton",
                    "tc_40" => "2600 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "REGALO Tubo Pika Tutti Frutti 100P",
                    "product_description" => "Gélifiées / Jellies",
                    "ref" => "0103GE026",
                    "weight" => "0",
                    "packaging" => "6 x Boîte display de 100 pièces / Carton",
                    "tc_20" => "1300 Carton",
                    "tc_40" => "2600 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "REGALO Tubo Brillo Tutti Frutti 100P",
                    "product_description" => "Gélifiées / Jellies",
                    "ref" => "0103GE027",
                    "weight" => "0",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "1300 Carton",
                    "tc_40" => "2600 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "REGALO Tubo Pika Fraisa 200P",
                    "product_description" => "Gélifiées / Jellies",
                    "ref" => "0103GE022",
                    "weight" => "0",
                    "packaging" => "6 x Boîte plastique de 200 pièces / Carton",
                    "tc_20" => "1300 Carton",
                    "tc_40" => "2600 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "REGALO Tubo Brillo Fraisa 100P",
                    "product_description" => "Gélifiées / Jellies",
                    "ref" => "0103GE033",
                    "weight" => "0",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "1300 Carton",
                    "tc_40" => "2600 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "REGALO Tubo Brillo Fraisa 200P",
                    "product_description" => "Gélifiées / Jellies",
                    "ref" => "0103GE021",
                    "weight" => "0",
                    "packaging" => "6 x Boîte plastique de 200 pièces / Carton",
                    "tc_20" => "1300 Carton",
                    "tc_40" => "2600 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "REGALO Tubo Pika Pastico 100P",
                    "product_description" => "Gélifiées / Jellies",
                    "ref" => "0103GE028",
                    "weight" => "0",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "1300 Carton",
                    "tc_40" => "2600 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "REGALO Tubo Brillo Pastico 100P",
                    "product_description" => "Gélifiées / Jellies",
                    "ref" => "0103GE029",
                    "weight" => "0",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "1300 Carton",
                    "tc_40" => "2600 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "REGALO Tubo Pika Pêche 100P",
                    "product_description" => "Gélifiées / Jellies",
                    "ref" => "0103GE030",
                    "weight" => "0",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "1300 Carton",
                    "tc_40" => "2600 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "REGALO Tubo Brillo Pêche 100P",
                    "product_description" => "Gélifiées / Jellies",
                    "ref" => "0103GE031",
                    "weight" => "0",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "1300 Carton",
                    "tc_40" => "2600 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "REGALO Tubo Pika Cola 100P",
                    "product_description" => "Gélifiées / Jellies",
                    "ref" => "0103GE032",
                    "weight" => "0",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "1300 Carton",
                    "tc_40" => "2600 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "REGALO Tubo Brillo Reglisse 200P",
                    "product_description" => "Gélifiées / Jellies",
                    "ref" => "0103GE023",
                    "weight" => "0",
                    "packaging" => "6 x Boîte plastique de 200 pièces / Carton",
                    "tc_20" => "1300 Carton",
                    "tc_40" => "2600 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "CINTA Pika Fraisa 200P",
                    "product_description" => "Gélifiées / Jellies",
                    "ref" => "0103GE001",
                    "weight" => "0",
                    "packaging" => "6 x Boîte plastique de 200 pièces / Carton",
                    "tc_20" => "1300 Carton",
                    "tc_40" => "2600 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "CINTA Pika Fruity 200P",
                    "product_description" => "Gélifiées / Jellies",
                    "ref" => "0103GE002",
                    "weight" => "0",
                    "packaging" => "6 x Boîte plastique de 200 pièces / Carton",
                    "tc_20" => "1300 Carton",
                    "tc_40" => "2600 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "CINTA Pika Fruity Cocktail 200P",
                    "product_description" => "Gélifiées / Jellies",
                    "ref" => "0103GE003",
                    "weight" => "0",
                    "packaging" => "6 x Boîte plastique de 200 pièces / Carton",
                    "tc_20" => "1300 Carton",
                    "tc_40" => "2600 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMY GOMME ANNEAUX",
                    "product_description" => "Gélifiées",
                    "ref" => "0103G042",
                    "weight" => "1250",
                    "packaging" => "6 x Boîte display de 200 pièces / Carton",
                    "tc_20" => "795 Carton",
                    "tc_40" => "1640 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMY GOMME FRAMBOISE",
                    "product_description" => "Gélifiées",
                    "ref" => "0103G044",
                    "weight" => "1250",
                    "packaging" => "6 x Boîte display de 200 pièces / Carton",
                    "tc_20" => "795 Carton",
                    "tc_40" => "1640 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMY GOMME SUCETTE",
                    "product_description" => "Gélifiées",
                    "ref" => "0103G041",
                    "weight" => "1250",
                    "packaging" => "6 x Boîte display de 200 pièces / Carton",
                    "tc_20" => "795 Carton",
                    "tc_40" => "1640 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMY GOMME REQUIN",
                    "product_description" => "Gélifiées",
                    "ref" => "0103G045",
                    "weight" => "1250",
                    "packaging" => "6 x Boîte display de 200 pièces / Carton",
                    "tc_20" => "795 Carton",
                    "tc_40" => "1640 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMY GOMME COEUR",
                    "product_description" => "Gélifiées",
                    "ref" => "0103G043",
                    "weight" => "1250",
                    "packaging" => "6 x Boîte display de 200 pièces / Carton",
                    "tc_20" => "795 Carton",
                    "tc_40" => "1640 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMY GOMME COLA",
                    "product_description" => "Gélifiées",
                    "ref" => "0103G048",
                    "weight" => "1250",
                    "packaging" => "6 x Boîte display de 200 pièces / Carton",
                    "tc_20" => "795 Carton",
                    "tc_40" => "1640 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMY GOMME BANANA",
                    "product_description" => "Gélifiées",
                    "ref" => "0103G031",
                    "weight" => "1250",
                    "packaging" => "6 x Boîte display de 200 pièces / Carton",
                    "tc_20" => "795 Carton",
                    "tc_40" => "1640 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMY GOMME FRAISA MIX",
                    "product_description" => "Gélifiées",
                    "ref" => "0103G057",
                    "weight" => "1250",
                    "packaging" => "6 x Boîte display de 200 pièces / Carton",
                    "tc_20" => "795 Carton",
                    "tc_40" => "1640 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMY GOMME FRAISA",
                    "product_description" => "Gélifiées",
                    "ref" => "0103G032",
                    "weight" => "1250",
                    "packaging" => "6 x Boîte display de 200 pièces / Carton",
                    "tc_20" => "795 Carton",
                    "tc_40" => "1640 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMY GOMME FRAISETA",
                    "product_description" => "Gélifiées",
                    "ref" => "0104G053",
                    "weight" => "1250",
                    "packaging" => "6 x Boîte display de 200 pièces / Carton",
                    "tc_20" => "795 Carton",
                    "tc_40" => "1640 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMY GOMME FRAISY",
                    "product_description" => "Gélifiées",
                    "ref" => "0104G054",
                    "weight" => "1250",
                    "packaging" => "6 x Boîte display de 200 pièces / Carton",
                    "tc_20" => "795 Carton",
                    "tc_40" => "1640 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMY GOMME ZOLO",
                    "product_description" => "Gélifiées",
                    "ref" => "0103G040",
                    "weight" => "1250",
                    "packaging" => "6 x Boîte display de 200 pièces / Carton",
                    "tc_20" => "795 Carton",
                    "tc_40" => "1640 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMY GOMME TEETY",
                    "product_description" => "Gélifiées",
                    "ref" => "0103G058",
                    "weight" => "1250",
                    "packaging" => "6 x Boîte display de 200 pièces / Carton",
                    "tc_20" => "795 Carton",
                    "tc_40" => "1640 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMY GOMME PASTICO",
                    "product_description" => "Gélifiées / Jellies",
                    "ref" => "0103GE059",
                    "weight" => "1250",
                    "packaging" => "6 x Boîte display de 200 pièces / Carton",
                    "tc_20" => "795 Carton",
                    "tc_40" => "1640 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMY GOMME FRAISA",
                    "product_description" => "Gélifiées / Jellies",
                    "ref" => "0103G080",
                    "weight" => "1000",
                    "packaging" => "15 x Sachet de 0 pièces / Carton",
                    "tc_20" => "840 Carton",
                    "tc_40" => "1680 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMY GOMME BANANA",
                    "product_description" => "Gélifiées / Jellies",
                    "ref" => "0103G081",
                    "weight" => "1000",
                    "packaging" => "15 x Sachet de 0 pièces / Carton",
                    "tc_20" => "840 Carton",
                    "tc_40" => "1680 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMY GOMME MIX",
                    "product_description" => "Gélifiées",
                    "ref" => "0103G055",
                    "weight" => "450",
                    "packaging" => "12 x Boîte plastique / Carton",
                    "tc_20" => "1510 Carton",
                    "tc_40" => "3135 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMY GOMME ASSORTIS",
                    "product_description" => "Gélifiées",
                    "ref" => "0103G056",
                    "weight" => "450",
                    "packaging" => "12 x Boîte plastique / Carton",
                    "tc_20" => "1510 Carton",
                    "tc_40" => "3135 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMY GOMME COEUR",
                    "product_description" => "Gélifiées / Jellies",
                    "ref" => "0601IM46",
                    "weight" => "180",
                    "packaging" => "24 x Pot de 0 pièces / Carton",
                    "tc_20" => "1350 Carton",
                    "tc_40" => "2950 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMY GOMME OURSON",
                    "product_description" => "Gélifiées",
                    "ref" => "0601I53",
                    "weight" => "100",
                    "packaging" => "6 Boîte de 15 x Sachet / Carton",
                    "tc_20" => "840 Carton",
                    "tc_40" => "1800 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMY GOMME COLA",
                    "product_description" => "Gélifiées",
                    "ref" => "0601I52",
                    "weight" => "100",
                    "packaging" => "6 Boîte de 15 x Sachet / Carton",
                    "tc_20" => "840 Carton",
                    "tc_40" => "1800 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMY GOMME ZOLO",
                    "product_description" => "Gélifiées",
                    "ref" => "0601I47",
                    "weight" => "100",
                    "packaging" => "6 Boîte de 15 x Sachet / Carton",
                    "tc_20" => "840 Carton",
                    "tc_40" => "1800 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMY GOMME ANNEAUX",
                    "product_description" => "Gélifiées",
                    "ref" => "0601I48",
                    "weight" => "100",
                    "packaging" => "6 Boîte de 15 x Sachet / Carton",
                    "tc_20" => "840 Carton",
                    "tc_40" => "1800 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMY GOMME COEUR",
                    "product_description" => "Gélifiées",
                    "ref" => "0601I49",
                    "weight" => "100",
                    "packaging" => "6 Boîte de 15 x Sachet / Carton",
                    "tc_20" => "840 Carton",
                    "tc_40" => "1800 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMY GOMME REQUIN",
                    "product_description" => "Gélifiées",
                    "ref" => "0601I50",
                    "weight" => "100",
                    "packaging" => "6 Boîte de 15 x Sachet / Carton",
                    "tc_20" => "840 Carton",
                    "tc_40" => "1800 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMY GOMME FRUITÉ",
                    "product_description" => "Gélifiées",
                    "ref" => "0601I51",
                    "weight" => "100",
                    "packaging" => "6 Boîte de 15 x Sachet / Carton",
                    "tc_20" => "840 Carton",
                    "tc_40" => "1800 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMY GOMME FRAMBOISE",
                    "product_description" => "Gélifiées",
                    "ref" => "0601I57",
                    "weight" => "100",
                    "packaging" => "6 Boîte de 15 x Sachet / Carton",
                    "tc_20" => "840 Carton",
                    "tc_40" => "1800 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMY GOMME SUCETTE",
                    "product_description" => "Gélifiées",
                    "ref" => "0601I54",
                    "weight" => "100",
                    "packaging" => "6 Boîte de 15 x Sachet / Carton",
                    "tc_20" => "840 Carton",
                    "tc_40" => "1800 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMY GOMME OEUF",
                    "product_description" => "Gélifiées",
                    "ref" => "0601l51",
                    "weight" => "100",
                    "packaging" => "6 x Boîte display / Carton",
                    "tc_20" => "795 Carton",
                    "tc_40" => "1640 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "MINI CLUB RÉGLISSE",
                    "product_description" => "Gélifiées",
                    "ref" => "0601I31",
                    "weight" => "30",
                    "packaging" => "24 Boîte de 9 x Sachet / Carton",
                    "tc_20" => "1250 Carton",
                    "tc_40" => "2680 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "MINI CLUB OURSON",
                    "product_description" => "Gélifiées",
                    "ref" => "0601I33",
                    "weight" => "30",
                    "packaging" => "24 Boîte de 9 x Sachet / Carton",
                    "tc_20" => "1250 Carton",
                    "tc_40" => "2680 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "MINI CLUB FRUITÉ",
                    "product_description" => "Gélifiées",
                    "ref" => "0601I34",
                    "weight" => "30",
                    "packaging" => "24 Boîte de 9 x Sachet / Carton",
                    "tc_20" => "1250 Carton",
                    "tc_40" => "2680 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "MINI CLUB COLA",
                    "product_description" => "Gélifiées",
                    "ref" => "0601I35",
                    "weight" => "30",
                    "packaging" => "24 Boîte de 9 x Sachet / Carton",
                    "tc_20" => "1250 Carton",
                    "tc_40" => "2680 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "MINI CLUB MENTHE",
                    "product_description" => "Gélifiées",
                    "ref" => "0601I36",
                    "weight" => "30",
                    "packaging" => "24 Boîte de 9 x Sachet / Carton",
                    "tc_20" => "1250 Carton",
                    "tc_40" => "2680 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "MERINGUES",
                    "product_description" => "Meringues",
                    "ref" => "0102M08",
                    "weight" => "600",
                    "packaging" => "5 x Sachet de 500 pièces / Sachet",
                    "tc_20" => "1360 Sachet",
                    "tc_40" => "2720 Sachet"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "MERINGUES HELLO",
                    "product_description" => "Meringues",
                    "ref" => "0102M09",
                    "weight" => "750",
                    "packaging" => "18 x Boîte de 300 pièces / Carton",
                    "tc_20" => "530 Carton",
                    "tc_40" => "1052 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "BRIDGE",
                    "product_description" => "Meringues",
                    "ref" => "0102M011",
                    "weight" => "840",
                    "packaging" => "6 x Boîte display de 200 pièces / Carton",
                    "tc_20" => "795 Carton",
                    "tc_40" => "1640 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "CIRCO",
                    "product_description" => "Meringues",
                    "ref" => "0102M012",
                    "weight" => "840",
                    "packaging" => "6 x Boîte display de 200 pièces / Carton",
                    "tc_20" => "795 Carton",
                    "tc_40" => "1640 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "PASTILLES MENTHOLÉES",
                    "product_description" => "Gélifiées",
                    "ref" => "0103G06",
                    "weight" => "1000",
                    "packaging" => "18 x Boîte / Carton",
                    "tc_20" => "910 Carton",
                    "tc_40" => "1950 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "PASTILLES MENTHOLÉES",
                    "product_description" => "Gélifiées",
                    "ref" => "0103G60",
                    "weight" => "1500",
                    "packaging" => "6 x Boîte / Carton",
                    "tc_20" => "795 Carton",
                    "tc_40" => "1640 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "PASTILLES FRUITÉES",
                    "product_description" => "Gélifiées",
                    "ref" => "0103G07",
                    "weight" => "1000",
                    "packaging" => "18 x Boîte / Carton",
                    "tc_20" => "910 Carton",
                    "tc_40" => "1950 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "PASTILLES FRUITÉES",
                    "product_description" => "Gélifiées",
                    "ref" => "0103G61",
                    "weight" => "1500",
                    "packaging" => "6 x Boîte / Carton",
                    "tc_20" => "795 Carton",
                    "tc_40" => "1640 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "PASTILLES CALABRAIS",
                    "product_description" => "Gélifiées",
                    "ref" => "0103G08",
                    "weight" => "1000",
                    "packaging" => "18 x Boîte / Carton",
                    "tc_20" => "910 Carton",
                    "tc_40" => "1950 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "PASTILLES CALABRAIS",
                    "product_description" => "Gélifiées",
                    "ref" => "0103G62",
                    "weight" => "1500",
                    "packaging" => "6 x Boîte / Carton",
                    "tc_20" => "795 Carton",
                    "tc_40" => "1640 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "VALMINT",
                    "product_description" => "Gélifiées",
                    "ref" => "0103G09",
                    "weight" => "50",
                    "packaging" => "120 x Boîte / Carton",
                    "tc_20" => "1330 Carton",
                    "tc_40" => "2870 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "VALFRUITS",
                    "product_description" => "Gélifiées",
                    "ref" => "0103G10",
                    "weight" => "50",
                    "packaging" => "120 x Boîte / Carton",
                    "tc_20" => "1330 Carton",
                    "tc_40" => "2870 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "MINI RÉGLISSE",
                    "product_description" => "Gélifiées",
                    "ref" => "0103G11",
                    "weight" => "50",
                    "packaging" => "120 x Boîte / Carton",
                    "tc_20" => "1330 Carton",
                    "tc_40" => "2870 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMME BANANE",
                    "product_description" => "Gélifiées",
                    "ref" => "0103G02",
                    "weight" => "800",
                    "packaging" => "18 x Boîte de 130 pièces / Carton",
                    "tc_20" => "990 Carton",
                    "tc_40" => "2130 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMME PARISIENNE",
                    "product_description" => "Gélifiées",
                    "ref" => "0103G03",
                    "weight" => "1000",
                    "packaging" => "16 x Sachet / Carton",
                    "tc_20" => "530 Carton",
                    "tc_40" => "1140 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMME OURSON",
                    "product_description" => "Gélifiées",
                    "ref" => "0103G05",
                    "weight" => "800",
                    "packaging" => "18 x Boîte de 130 pièces / Carton",
                    "tc_20" => "1000 Carton",
                    "tc_40" => "2150 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "RÉGLISSE",
                    "product_description" => "Gélifiées",
                    "ref" => "0103G13",
                    "weight" => "750",
                    "packaging" => "18 x Boîte de 140 pièces / Carton",
                    "tc_20" => "1390 Carton",
                    "tc_40" => "2990 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMME DOLLARS",
                    "product_description" => "Gélifiées",
                    "ref" => "0103G14",
                    "weight" => "820",
                    "packaging" => "18 x Boîte de 380 pièces / Carton",
                    "tc_20" => "990 Carton",
                    "tc_40" => "2130 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Gommes gélifiées",
                    "product_name" => "GOMME BOUTEILLE",
                    "product_description" => "Gélifiées",
                    "ref" => "0103G17",
                    "weight" => "830",
                    "packaging" => "18 x Boîte de 130 pièces / Carton",
                    "tc_20" => "1000 Carton",
                    "tc_40" => "2150 Carton"
                ],

                // ?Dragees
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Dragées",
                    "product_name" => "DRAGÉES IMPÉRIAL BLANCHES",
                    "product_description" => "Dragées Aux Amandes N°1",
                    "ref" => "0301P28",
                    "weight" => "1000",
                    "packaging" => "17 x Boîte / Carton",
                    "tc_20" => "910 Carton",
                    "tc_40" => "1950 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Dragées",
                    "product_name" => "DRAGÉES IMPÉRIAL BLEUES",
                    "product_description" => "Dragées Aux Amandes N°1",
                    "ref" => "0301P29",
                    "weight" => "1000",
                    "packaging" => "17 x Boîte / Carton",
                    "tc_20" => "910 Carton",
                    "tc_40" => "1950 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Dragées",
                    "product_name" => "DRAGÉES IMPÉRIAL ROSES",
                    "product_description" => "Dragées Aux Amandes N°1",
                    "ref" => "0301P30",
                    "weight" => "1000",
                    "packaging" => "17 x Boîte / Carton",
                    "tc_20" => "910 Carton",
                    "tc_40" => "1950 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Dragées",
                    "product_name" => "DRAGÉES CLASSIQUE BLANCHES",
                    "product_description" => "Dragées Aux Amandes N°3",
                    "ref" => "0301P31",
                    "weight" => "1000",
                    "packaging" => "17 x Boîte / Carton",
                    "tc_20" => "910 Carton",
                    "tc_40" => "1950 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Dragées",
                    "product_name" => "DRAGÉES CLASSIQUE BLEUES",
                    "product_description" => "Dragées Aux Amandes N°3",
                    "ref" => "0301P32",
                    "weight" => "1000",
                    "packaging" => "17 x Boîte / Carton",
                    "tc_20" => "910 Carton",
                    "tc_40" => "1950 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Dragées",
                    "product_name" => "DRAGÉES CLASSIQUE ROSES",
                    "product_description" => "Dragées Aux Amandes N°3",
                    "ref" => "0301P33",
                    "weight" => "1000",
                    "packaging" => "17 x Boîte / Carton",
                    "tc_20" => "910 Carton",
                    "tc_40" => "1950 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Dragées",
                    "product_name" => "DRAGÉES CLASSIQUE BLANCHES.",
                    "product_description" => "Dragées Au Chocolat",
                    "ref" => "0304P66",
                    "weight" => "1000",
                    "packaging" => "17 x Boîte / Carton",
                    "tc_20" => "910 Carton",
                    "tc_40" => "1950 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Dragées",
                    "product_name" => "DRAGÉES CLASSIQUE BLEUES.",
                    "product_description" => "Dragées Au Chocolat",
                    "ref" => "0304P67",
                    "weight" => "1000",
                    "packaging" => "17 x Boîte / Carton",
                    "tc_20" => "910 Carton",
                    "tc_40" => "1950 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Dragées",
                    "product_name" => "DRAGÉES CLASSIQUE ROSES.",
                    "product_description" => "Dragées Au Chocolat",
                    "ref" => "0304P68",
                    "weight" => "1000",
                    "packaging" => "17 x Boîte / Carton",
                    "tc_20" => "910 Carton",
                    "tc_40" => "1950 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Dragées",
                    "product_name" => "DRAGÉES COEUR BLANCHES",
                    "product_description" => "Dragées Au Chocolat",
                    "ref" => "0304P69",
                    "weight" => "1000",
                    "packaging" => "17 x Boîte / Carton",
                    "tc_20" => "910 Carton",
                    "tc_40" => "1950 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Dragées",
                    "product_name" => "DRAGÉES COEUR BLEUES",
                    "product_description" => "Dragées Au Chocolat",
                    "ref" => "0304P70",
                    "weight" => "1000",
                    "packaging" => "17 x Boîte / Carton",
                    "tc_20" => "910 Carton",
                    "tc_40" => "1950 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Dragées",
                    "product_name" => "DRAGÉES COEUR ROSES",
                    "product_description" => "Dragées Au Chocolat",
                    "ref" => "0304P71",
                    "weight" => "1000",
                    "packaging" => "17 x Boîte / Carton",
                    "tc_20" => "910 Carton",
                    "tc_40" => "1950 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Dragées",
                    "product_name" => "MINIES CHOCOLAT",
                    "product_description" => "Chocolat Au Lait Dragéfié",
                    "ref" => "0304P060",
                    "weight" => "1000",
                    "packaging" => "17 x Boîte / Carton",
                    "tc_20" => "1040 Carton",
                    "tc_40" => "2240 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Dragées",
                    "product_name" => "MINIES CHOCOLAT",
                    "product_description" => "Chocolat Au Lait Dragéfié",
                    "ref" => "0601 i 022",
                    "weight" => "180",
                    "packaging" => "24 x Pot / Carton",
                    "tc_20" => "1600 Carton",
                    "tc_40" => "3300 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Dragées",
                    "product_name" => "Dragées au chocolat",
                    "product_description" => "Dragées au chocolat assortis",
                    "ref" => "0304 P 073",
                    "weight" => "500",
                    "packaging" => "24 x Boîte / Carton",
                    "tc_20" => "910 Carton",
                    "tc_40" => "1950 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Dragées",
                    "product_name" => "Dragées au chocolat",
                    "product_description" => "Dragées au chocolat assortis",
                    "ref" => "0304 P 072",
                    "weight" => "1000",
                    "packaging" => "12 x Boîte / Carton",
                    "tc_20" => "910 Carton",
                    "tc_40" => "1950 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Dragées",
                    "product_name" => "Dragées au chocolat",
                    "product_description" => "Dragées au chocolat assortis",
                    "ref" => "0304 P 076",
                    "weight" => "250",
                    "packaging" => "18 x Sachet / Sachet",
                    "tc_20" => "910 Sachet",
                    "tc_40" => "1950 Sachet"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Dragées",
                    "product_name" => "Dragées au chocolat assortis",
                    "product_description" => "Dragées classique au chocolat",
                    "ref" => "0304 P 075",
                    "weight" => "250",
                    "packaging" => "18 x Sachet / Sachet",
                    "tc_20" => "910 Sachet",
                    "tc_40" => "1950 Sachet"
                ],

                // ?Caramel

                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Caramel",
                    "product_name" => "CARAMEL CHOCO",
                    "product_description" => "Caramel au Chocolat",
                    "ref" => "0101B70",
                    "weight" => "1440",
                    "packaging" => "6 x Boîte plastique de 200 pièces / Carton",
                    "tc_20" => "1070 Carton",
                    "tc_40" => "2300 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Caramel",
                    "product_name" => "CARAMEL RÉGLISSE",
                    "product_description" => "Caramel à la Réglisse",
                    "ref" => "0101B71",
                    "weight" => "1440",
                    "packaging" => "6 x Boîte plastique de 200 pièces / Carton",
                    "tc_20" => "1070 Carton",
                    "tc_40" => "2300 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Caramel",
                    "product_name" => "CARAMEL LAIT",
                    "product_description" => "Caramel Au Lait",
                    "ref" => "0101B072",
                    "weight" => "1440",
                    "packaging" => "6 x Boîte plastique de 200 pièces / Carton",
                    "tc_20" => "1070 Carton",
                    "tc_40" => "2300 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Caramel",
                    "product_name" => "CARAMEL NOUGAT",
                    "product_description" => "Caramel Goût Nougat",
                    "ref" => "0101B073",
                    "weight" => "1440",
                    "packaging" => "6 x Boîte plastique de 200 pièces / Carton",
                    "tc_20" => "1070 Carton",
                    "tc_40" => "2300 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Caramel",
                    "product_name" => "CARAMEL FRUITÉ",
                    "product_description" => "Caramel Goût Fruité",
                    "ref" => "0101B075",
                    "weight" => "1440",
                    "packaging" => "6 x Boîte plastique de 200 pièces / Carton",
                    "tc_20" => "1070 Carton",
                    "tc_40" => "2300 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Caramel",
                    "product_name" => "CAFÉ CRÈME",
                    "product_description" => "Toffée Au Lait Et Café Fourré Au Cacao",
                    "ref" => "0101B062",
                    "weight" => "650",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "920 Carton",
                    "tc_40" => "1980 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Caramel",
                    "product_name" => "CAFÉ CRÈME",
                    "product_description" => "Toffée Au Lait Et Café Fourré Au Cacao",
                    "ref" => "0601I046",
                    "weight" => "150",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "3130 Carton",
                    "tc_40" => "6720 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Caramel",
                    "product_name" => "CARAMEL MIX",
                    "product_description" => "Assortiment de Caramels",
                    "ref" => "060 i 060",
                    "weight" => "150",
                    "packaging" => "18 x Sachet de 0 pièces / Carton",
                    "tc_20" => "3410 Carton",
                    "tc_40" => "6820 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Caramel",
                    "product_name" => "TOFFEE TOP",
                    "product_description" => "Toffees Au Lait",
                    "ref" => "0101B060",
                    "weight" => "1000",
                    "packaging" => "12 x Sachet / Carton",
                    "tc_20" => "800 Carton",
                    "tc_40" => "1650 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Caramel",
                    "product_name" => "TOFFE TOP..",
                    "product_description" => "Toffees Au Lait",
                    "ref" => "0601I043",
                    "weight" => "150",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "3000 Carton",
                    "tc_40" => "5900 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Caramel",
                    "product_name" => "EXQUIS",
                    "product_description" => "Toffées Au Lait Fourrés Au Chocolat",
                    "ref" => "0601I45",
                    "weight" => "150",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "3000 Carton",
                    "tc_40" => "5900 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Caramel",
                    "product_name" => "EXQUIS",
                    "product_description" => "Toffées Au Lait Fourrés Au Chocolat",
                    "ref" => "0101B81",
                    "weight" => "400",
                    "packaging" => "30 x Sachet / Carton",
                    "tc_20" => "830 Carton",
                    "tc_40" => "1720 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Caramel",
                    "product_name" => "EXQUIS",
                    "product_description" => "Toffées Au Lait Fourrés Au Chocolat",
                    "ref" => "0101B80",
                    "weight" => "1000",
                    "packaging" => "12 x Sachet / Carton",
                    "tc_20" => "800 Carton",
                    "tc_40" => "1650 Carton"
                ],

                // ?bonbons dure sans sucre
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS SANS SUCRE",
                    "product_name" => "MAC LIGHT FRUITÉ",
                    "product_description" => "Bonbon Sans Sucre",
                    "ref" => "0105B001",
                    "weight" => "780",
                    "packaging" => "6 x Bocal plastique de 200 pièces / Carton",
                    "tc_20" => "3290 Carton",
                    "tc_40" => "7050 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS SANS SUCRE",
                    "product_name" => "MAC LIGHT MENTHE",
                    "product_description" => "Bonbon sans Sucre",
                    "ref" => "0105B002",
                    "weight" => "780",
                    "packaging" => "6 x Bocal plastique de 200 pièces / Carton",
                    "tc_20" => "3290 Carton",
                    "tc_40" => "7050 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS SANS SUCRE",
                    "product_name" => "MAC LIGHT RÉGLISSE",
                    "product_description" => "Bonbon Sans Sucre",
                    "ref" => "0105B003",
                    "weight" => "780",
                    "packaging" => "6 x Bocal plastique de 200 pièces / Carton",
                    "tc_20" => "3290 Carton",
                    "tc_40" => "7050 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS SANS SUCRE",
                    "product_name" => "MAC LIGHT FRUITÉ",
                    "product_description" => "Bonbon Sans Sucre",
                    "ref" => "0601I090",
                    "weight" => "100",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "3130 Carton",
                    "tc_40" => "6720 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS SANS SUCRE",
                    "product_name" => "MAC LIGHT MENTHE",
                    "product_description" => "Bonbon Sans Sucre",
                    "ref" => "0601I091",
                    "weight" => "100",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "3130 Carton",
                    "tc_40" => "6720 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS SANS SUCRE",
                    "product_name" => "MAC LIGHT RÉGLISSE",
                    "product_description" => "Bonbon Sans Sucre",
                    "ref" => "0601I092",
                    "weight" => "100",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "3130 Carton",
                    "tc_40" => "6720 Carton"
                ],

                // ?bonbons dure

                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "PICO GINGEMBRE",
                    "product_description" => "Bonbon Au Gingembre",
                    "ref" => "0101BE25",
                    "weight" => "400",
                    "packaging" => "12 x Sachet de 100 pièces / Carton",
                    "tc_20" => "1980 Carton",
                    "tc_40" => "4000 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "PICO MENTHE",
                    "product_description" => "Bonbon à la Menthe",
                    "ref" => "0101BE49",
                    "weight" => "400",
                    "packaging" => "12 x Sachet de 100 pièces / Carton",
                    "tc_20" => "1980 Carton",
                    "tc_40" => "4000 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "YOPINO FRAISE & CRÈME",
                    "product_description" => "Bonbon à la Crème Fraise",
                    "ref" => "0101B305",
                    "weight" => "100",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "3130 Carton",
                    "tc_40" => "6720 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "YOPINO FRAISE & CRÈME",
                    "product_description" => "Bonbon à la Crème Fraise",
                    "ref" => "0101B301",
                    "weight" => "680",
                    "packaging" => "15 x Sachet de 170 pièces / Carton",
                    "tc_20" => "980 Carton",
                    "tc_40" => "2100 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "YOPINO ORANGE & CREME",
                    "product_description" => "Bonbon à la Crème Orange",
                    "ref" => "0101B302",
                    "weight" => "680",
                    "packaging" => "15 x Sachet de 170 pièces / Carton",
                    "tc_20" => "980 Carton",
                    "tc_40" => "2100 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "YOPINO ORANGE & CREME",
                    "product_description" => "Bonbon à la Crème Orange",
                    "ref" => "0101B306",
                    "weight" => "100",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "3130 Carton",
                    "tc_40" => "6720 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "YOPINO MIXTE",
                    "product_description" => "Assortiment de Bonbons Fruités à la Crème",
                    "ref" => "0101B303",
                    "weight" => "680",
                    "packaging" => "12 x Sachet de 170 pièces / Carton",
                    "tc_20" => "980 Carton",
                    "tc_40" => "2100 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "YOPINO MIXTE",
                    "product_description" => "Assortiment de Bonbons Fruités à la Crème",
                    "ref" => "0101B307",
                    "weight" => "100",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "3130 Carton",
                    "tc_40" => "6720 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "YOPINO MIXTE",
                    "product_description" => "Assortiment de Bonbons Fruités à la Crème",
                    "ref" => "0101B304",
                    "weight" => "400",
                    "packaging" => "32 x Sachet de 100 pièces / Carton",
                    "tc_20" => "610 Carton",
                    "tc_40" => "1320 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "YOPINO CAPPUCCINO",
                    "product_description" => "Bonbon Cappuccino",
                    "ref" => "0601I064",
                    "weight" => "100",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "2900 Carton",
                    "tc_40" => "5900 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "YOPINO CAPPUCCINO",
                    "product_description" => "Bonbon Cappuccino",
                    "ref" => "0101B313",
                    "weight" => "650",
                    "packaging" => "15 x Sachet de 165 pièces / Carton",
                    "tc_20" => "875 Carton",
                    "tc_40" => "1870 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "YOPINO COFFEE",
                    "product_description" => "Bonbon au Café",
                    "ref" => "0601I063",
                    "weight" => "100",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "2900 Carton",
                    "tc_40" => "5900 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "YOPINO COFFEE",
                    "product_description" => "Bonbon au Café",
                    "ref" => "0101B312",
                    "weight" => "650",
                    "packaging" => "15 x Sachet de 165 pièces / Carton",
                    "tc_20" => "875 Carton",
                    "tc_40" => "1870 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "CANDYO CRÈME",
                    "product_description" => "Bonbon à la Crème",
                    "ref" => "0601I074",
                    "weight" => "150",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "3000 Carton",
                    "tc_40" => "5900 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "CANDYO CRÈME",
                    "product_description" => "Bonbon à la Crème",
                    "ref" => "0101B069",
                    "weight" => "650",
                    "packaging" => "15 x Sachet de 165 pièces / Carton",
                    "tc_20" => "850 Carton",
                    "tc_40" => "1900 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "CANDYO FRUITÉ",
                    "product_description" => "Bonbons Fruités",
                    "ref" => "0601I073",
                    "weight" => "150",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "3130 Carton",
                    "tc_40" => "6720 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "CANDYO FRUITÉ",
                    "product_description" => "Bonbons Fruités",
                    "ref" => "0101B064",
                    "weight" => "800",
                    "packaging" => "12 x Sachet de 200 pièces / Carton",
                    "tc_20" => "1000 Carton",
                    "tc_40" => "2140 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "CANDYO FRUITÉ",
                    "product_description" => "Bonbons Fruités",
                    "ref" => "0101B063",
                    "weight" => "400",
                    "packaging" => "24 x Sachet de 100 pièces / Carton",
                    "tc_20" => "1000 Carton",
                    "tc_40" => "2140 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "CANDYO RÉGLISSE",
                    "product_description" => "Bonbons à la Réglisse",
                    "ref" => "0601I069",
                    "weight" => "150",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "3130 Carton",
                    "tc_40" => "6720 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "CANDYO RÉGLISSE",
                    "product_description" => "Bonbons à la Réglisse",
                    "ref" => "0101B065",
                    "weight" => "800",
                    "packaging" => "15 x Sachet de 200 pièces / Carton",
                    "tc_20" => "1000 Carton",
                    "tc_40" => "2140 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "CANDYO EUCALYPTUS",
                    "product_description" => "Bonbon Eucalyptus",
                    "ref" => "0601I070",
                    "weight" => "150",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "3130 Carton",
                    "tc_40" => "6720 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "CANDYO EUCALYPTUS",
                    "product_description" => "Bonbon Eucalyptus",
                    "ref" => "0101B066",
                    "weight" => "800",
                    "packaging" => "15 x Sachet de 200 pièces / Carton",
                    "tc_20" => "1000 Carton",
                    "tc_40" => "2140 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "CANDYO CAFE",
                    "product_description" => "Bonbon Café",
                    "ref" => "0601I071",
                    "weight" => "150",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "3130 Carton",
                    "tc_40" => "6720 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "CANDYO CAFE",
                    "product_description" => "Bonbon Café",
                    "ref" => "0101B067",
                    "weight" => "800",
                    "packaging" => "15 x Sachet de 200 pièces / Carton",
                    "tc_20" => "1000 Carton",
                    "tc_40" => "2140 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "CANDYO LAIT",
                    "product_description" => "Bonbon Lait",
                    "ref" => "0101B068",
                    "weight" => "800",
                    "packaging" => "12 x Sachet de 200 pièces / Carton",
                    "tc_20" => "1000 Carton",
                    "tc_40" => "2140 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "CANDYO LAIT",
                    "product_description" => "Bonbon Lait",
                    "ref" => "0601I072",
                    "weight" => "150",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "3130 Carton",
                    "tc_40" => "6720 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "MONADA COLA",
                    "product_description" => "Bonbon Cola",
                    "ref" => "0601I66",
                    "weight" => "150",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "3130 Carton",
                    "tc_40" => "6720 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "MONADA COLA",
                    "product_description" => "Bonbon Cola",
                    "ref" => "0101B46",
                    "weight" => "660",
                    "packaging" => "18 x Sachet / Carton",
                    "tc_20" => "980 Carton",
                    "tc_40" => "2100 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "ANIS",
                    "product_description" => "Bonbon à l'Anis Fourré",
                    "ref" => "0601I40",
                    "weight" => "150",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "3130 Carton",
                    "tc_40" => "6720 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "ANIS",
                    "product_description" => "Bonbon à l'Anis Fourré",
                    "ref" => "0101B38",
                    "weight" => "500",
                    "packaging" => "24 x Sachet / Carton",
                    "tc_20" => "590 Carton",
                    "tc_40" => "1280 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "ANIS",
                    "product_description" => "Bonbon à l'Anis Fourré",
                    "ref" => "0101B37",
                    "weight" => "1000",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "740 Carton",
                    "tc_40" => "1600 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "MINT",
                    "product_description" => "Bonbon à la Menthe Fourré",
                    "ref" => "0601I02",
                    "weight" => "150",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "3130 Carton",
                    "tc_40" => "6720 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "MINT",
                    "product_description" => "Bonbon à la Menthe Fourré",
                    "ref" => "0101B05",
                    "weight" => "500",
                    "packaging" => "24 x Sachet / Carton",
                    "tc_20" => "590 Carton",
                    "tc_40" => "1280 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "MINT",
                    "product_description" => "Bonbon à la Menthe Fourré",
                    "ref" => "0101B04",
                    "weight" => "1000",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "770 Carton",
                    "tc_40" => "1670 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "ROYAL",
                    "product_description" => "Bonbon Fourré",
                    "ref" => "0601I03",
                    "weight" => "150",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "3130 Carton",
                    "tc_40" => "6720 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "ROYAL",
                    "product_description" => "Bonbon Fourré",
                    "ref" => "0101B009",
                    "weight" => "500",
                    "packaging" => "24 x Sachet / Carton",
                    "tc_20" => "590 Carton",
                    "tc_40" => "1280 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "ROYAL",
                    "product_description" => "Bonbon Fourré",
                    "ref" => "0101B008",
                    "weight" => "1000",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "780 Carton",
                    "tc_40" => "1670 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "BRAVO",
                    "product_description" => "Bonbon Goût Cacao",
                    "ref" => "0601I007",
                    "weight" => "150",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "3130 Carton",
                    "tc_40" => "6720 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "BRAVO",
                    "product_description" => "Bonbon Goût Cacao",
                    "ref" => "0101B022",
                    "weight" => "500",
                    "packaging" => "24 x Sachet / Carton",
                    "tc_20" => "590 Carton",
                    "tc_40" => "1280 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "BRAVO",
                    "product_description" => "Bonbon Goût Cacao",
                    "ref" => "0101B021",
                    "weight" => "1000",
                    "packaging" => "15 x Sachet de 160 pièces / Carton",
                    "tc_20" => "740 Carton",
                    "tc_40" => "1600 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "MOKA",
                    "product_description" => "Bonbon Goût Café",
                    "ref" => "0601I006",
                    "weight" => "150",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "3130 Carton",
                    "tc_40" => "6720 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "MOKA",
                    "product_description" => "Bonbon Goût Café",
                    "ref" => "0101B018",
                    "weight" => "500",
                    "packaging" => "24 x Sachet / Carton",
                    "tc_20" => "590 Carton",
                    "tc_40" => "1280 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "MOKA",
                    "product_description" => "Bonbon Goût Café",
                    "ref" => "0101B017",
                    "weight" => "1000",
                    "packaging" => "15 x Sachet de 160 pièces / Carton",
                    "tc_20" => "780 Carton",
                    "tc_40" => "1670 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "MIEL",
                    "product_description" => "Bonbons",
                    "ref" => "0601I041",
                    "weight" => "150",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "3130 Carton",
                    "tc_40" => "6720 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "MIEL",
                    "product_description" => "Bonbons",
                    "ref" => "0101B041",
                    "weight" => "500",
                    "packaging" => "24 x Sachet / Carton",
                    "tc_20" => "875 Carton",
                    "tc_40" => "1870 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "MIEL",
                    "product_description" => "Bonbons",
                    "ref" => "0101B040",
                    "weight" => "1000",
                    "packaging" => "15 x Sachet de 160 pièces / Carton",
                    "tc_20" => "875 Carton",
                    "tc_40" => "1870 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "DIAMANT MILK",
                    "product_description" => "Bonbon",
                    "ref" => "0101B086",
                    "weight" => "1000",
                    "packaging" => "6 x Boîte de 200 pièces / Carton",
                    "tc_20" => "1200 Carton",
                    "tc_40" => "2500 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "DIAMANT MILK",
                    "product_description" => "Bonbons au Lait Fourrés",
                    "ref" => "0101BE086",
                    "weight" => "1000",
                    "packaging" => "8 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "820 Carton",
                    "tc_40" => "1750 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "DIAMANT COFFEE",
                    "product_description" => "Bonbons",
                    "ref" => "0101B087",
                    "weight" => "1000",
                    "packaging" => "6 x Boîte de 200 pièces / Carton",
                    "tc_20" => "1200 Carton",
                    "tc_40" => "2500 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "TROPICO PASTÈQUE",
                    "product_description" => "Bonbons Goût Pastèque",
                    "ref" => "0601I062",
                    "weight" => "100",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "2900 Carton",
                    "tc_40" => "5900 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "TROPICO PASTÈQUE",
                    "product_description" => "Bonbons Goût Pastèque",
                    "ref" => "0101B311",
                    "weight" => "650",
                    "packaging" => "15 x Sachet de 165 pièces / Carton",
                    "tc_20" => "820 Carton",
                    "tc_40" => "1700 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "PINTO RÉGLISSE",
                    "product_description" => "Bonbons à la Réglisse",
                    "ref" => "0101B310",
                    "weight" => "650",
                    "packaging" => "15 x Sachet de 165 pièces / Carton",
                    "tc_20" => "820 Carton",
                    "tc_40" => "1700 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "PINTO RÉGLISSE",
                    "product_description" => "Bonbons à la Réglisse",
                    "ref" => "0601I061",
                    "weight" => "100",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "2900 Carton",
                    "tc_40" => "5900 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "PINTO MENTHE",
                    "product_description" => "Bonbons à la Menthe",
                    "ref" => "0601I065",
                    "weight" => "100",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "2900 Carton",
                    "tc_40" => "5900 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "PINTO MENTHE",
                    "product_description" => "Bonbons à la Menthe",
                    "ref" => "0101B309",
                    "weight" => "650",
                    "packaging" => "15 x Sachet de 165 pièces / Carton",
                    "tc_20" => "820 Carton",
                    "tc_40" => "1700 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "MAC VAMPIRO Fraisy",
                    "product_description" => "Bonbon goût fraise fourré",
                    "ref" => "0202 B 027",
                    "weight" => "400",
                    "packaging" => "10 x Sachet de 100 pièces / Carton",
                    "tc_20" => "1600 Carton",
                    "tc_40" => "3300 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "MAC VAMPIRO Fruity",
                    "product_description" => "Bonbon goût fruits fourré",
                    "ref" => "0202 B 028",
                    "weight" => "400",
                    "packaging" => "10 x Sachet de 100 pièces / Carton",
                    "tc_20" => "1600 Carton",
                    "tc_40" => "3300 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "BONBONS DURS",
                    "product_name" => "DIAMANT Mangue",
                    "product_description" => "Bonbon Mangue",
                    "ref" => "0101B026",
                    "weight" => "540",
                    "packaging" => "12 x Sachet de 100 pièces / Carton",
                    "tc_20" => "1900 Carton",
                    "tc_40" => "4100 Carton"
                ],

                // ?tablettes de chocolats

                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN NOIR",
                    "product_description" => "Tablette de Chocolat 73% de Cacao",
                    "ref" => "0201T07",
                    "weight" => "100",
                    "packaging" => "10 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1810 Carton",
                    "tc_40" => "3890 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT NOIR EXTRA FIN AUX AMANDES",
                    "product_description" => "Tablette de Chocolat 73% de Cacao",
                    "ref" => "0201T020",
                    "weight" => "100",
                    "packaging" => "10 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1810 Carton",
                    "tc_40" => "3890 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN LAIT",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T006",
                    "weight" => "100",
                    "packaging" => "10 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1810 Carton",
                    "tc_40" => "3890 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN AMANDE",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T16",
                    "weight" => "100",
                    "packaging" => "10 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1810 Carton",
                    "tc_40" => "3890 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN MIXTE",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T17",
                    "weight" => "100",
                    "packaging" => "10 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1810 Carton",
                    "tc_40" => "3890 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN MOKA",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T18",
                    "weight" => "100",
                    "packaging" => "10 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1810 Carton",
                    "tc_40" => "3890 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN NOISETTES",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T19",
                    "weight" => "100",
                    "packaging" => "10 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1810 Carton",
                    "tc_40" => "3890 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT FONDANT NOIR",
                    "product_description" => "Tablette de Chocolat 73% de Cacao",
                    "ref" => "0201T042",
                    "weight" => "150",
                    "packaging" => "6 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1690 Carton",
                    "tc_40" => "3630 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT FONDANT AU LAIT",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T043",
                    "weight" => "150",
                    "packaging" => "6 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1690 Carton",
                    "tc_40" => "3630 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT FONDANT LAIT & NOISETTES",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T044",
                    "weight" => "150",
                    "packaging" => "6 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1690 Carton",
                    "tc_40" => "3630 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT FONDANT LAIT & AMANDES",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T045",
                    "weight" => "150",
                    "packaging" => "6 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1690 Carton",
                    "tc_40" => "3630 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT SUPERIEUR NOIR",
                    "product_description" => "Tablette de Chocolat 73% de Cacao",
                    "ref" => "0201T09",
                    "weight" => "180",
                    "packaging" => "5 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1610 Carton",
                    "tc_40" => "3460 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT DESSERT",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T10",
                    "weight" => "180",
                    "packaging" => "5 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1610 Carton",
                    "tc_40" => "3460 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT SUPERIEUR LAIT",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T08",
                    "weight" => "180",
                    "packaging" => "5 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1610 Carton",
                    "tc_40" => "3460 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN NOIR",
                    "product_description" => "Tablette de Chocolat 73% de Cacao",
                    "ref" => "0201T002",
                    "weight" => "40",
                    "packaging" => "10 Boîte de 20 x Tablette / Carton",
                    "tc_20" => "1580 Carton",
                    "tc_40" => "3400 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN LAIT",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T001",
                    "weight" => "40",
                    "packaging" => "10 Boîte de 20 x Tablette / Carton",
                    "tc_20" => "1580 Carton",
                    "tc_40" => "3400 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN DESSERT",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T003",
                    "weight" => "40",
                    "packaging" => "10 Boîte de 20 x Tablette / Carton",
                    "tc_20" => "1580 Carton",
                    "tc_40" => "3400 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN BLANC CHAMONIX",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T038",
                    "weight" => "40",
                    "packaging" => "10 Boîte de 20 x Tablette / Carton",
                    "tc_20" => "1580 Carton",
                    "tc_40" => "3400 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN ALMENDRA",
                    "product_description" => "Tablettes de chocolats",
                    "ref" => "0201T012",
                    "weight" => "50",
                    "packaging" => "10 Boîte de 20 x Tablette / Carton",
                    "tc_20" => "1520 Carton",
                    "tc_40" => "3260 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN NOISETTES",
                    "product_description" => "Tablettes de chocolats",
                    "ref" => "0201T022",
                    "weight" => "50",
                    "packaging" => "10 Boîte de 20 x Tablette / Carton",
                    "tc_20" => "1520 Carton",
                    "tc_40" => "3260 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN PRALINÉ",
                    "product_description" => "Tablettes de chocolats",
                    "ref" => "0201T26",
                    "weight" => "50",
                    "packaging" => "10 Boîte de 20 x Tablette / Carton",
                    "tc_20" => "1520 Carton",
                    "tc_40" => "3260 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN FRAISE",
                    "product_description" => "Tablettes de chocolats",
                    "ref" => "0201T27",
                    "weight" => "50",
                    "packaging" => "10 Boîte de 20 x Tablette / Carton",
                    "tc_20" => "1520 Carton",
                    "tc_40" => "3260 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN TUTTI FRUTTI",
                    "product_description" => "Tablettes de chocolats",
                    "ref" => "0201T028",
                    "weight" => "50",
                    "packaging" => "10 Boîte de 20 x Tablette / Carton",
                    "tc_20" => "1520 Carton",
                    "tc_40" => "3260 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN MOKA",
                    "product_description" => "Tablettes de chocolats",
                    "ref" => "0201T029",
                    "weight" => "50",
                    "packaging" => "10 Boîte de 20 x Tablette / Carton",
                    "tc_20" => "1520 Carton",
                    "tc_40" => "3260 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN ALMENDRA 15g",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T037",
                    "weight" => "15",
                    "packaging" => "12 Boîte de 30 x Tablette / Carton",
                    "tc_20" => "1740 Carton",
                    "tc_40" => "3740 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN NOISETTES 15g",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T036",
                    "weight" => "15",
                    "packaging" => "12 Boîte de 30 x Tablette / Carton",
                    "tc_20" => "1740 Carton",
                    "tc_40" => "3740 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN PRALINÉ 15g",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T032",
                    "weight" => "15",
                    "packaging" => "12 Boîte de 30 x Tablette / Carton",
                    "tc_20" => "1740 Carton",
                    "tc_40" => "3740 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN FRAISE 15g",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T33",
                    "weight" => "15",
                    "packaging" => "12 Boîte de 30 x Tablette / Carton",
                    "tc_20" => "1520 Carton",
                    "tc_40" => "3260 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN TUTTI FRUTTI 15g",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T034",
                    "weight" => "15",
                    "packaging" => "12 Boîte de 30 x Tablette / Carton",
                    "tc_20" => "1740 Carton",
                    "tc_40" => "3740 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "HOCOLAT EXTRA FIN MOKA 15g",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T035",
                    "weight" => "15",
                    "packaging" => "12 Boîte de 30 x Tablette / Carton",
                    "tc_20" => "1740 Carton",
                    "tc_40" => "3740 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "MARYZA",
                    "product_description" => "Succédané de chocolat au lait & amandes",
                    "ref" => "0202T02",
                    "weight" => "200",
                    "packaging" => "10 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1740 Carton",
                    "tc_40" => "3730 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "MARYZA",
                    "product_description" => "Succédané de chocolat au lait & amandes",
                    "ref" => "0202T01",
                    "weight" => "100",
                    "packaging" => "10 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1740 Carton",
                    "tc_40" => "3730 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOMIX LAIT & AMANDES",
                    "product_description" => "Succédané de chocolat au lait & amandes",
                    "ref" => "0202T03",
                    "weight" => "150",
                    "packaging" => "8 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1600 Carton",
                    "tc_40" => "3440 Carton"
                ],
                [
                    "parent_category_name" => "Confiserie",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOMIX LAIT & NOISETTES",
                    "product_description" => "Succédané de chocolat au lait & noisettes",
                    "ref" => "0202T04",
                    "weight" => "150",
                    "packaging" => "8 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1600 Carton",
                    "tc_40" => "3440 Carton"
                ],



            ],
            "Chocolat" => [
                // ?pates a tartiner
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Pâtes à tartiner",
                    "product_name" => "TARTINA choco Noisettes",
                    "product_description" => "Pâtes à tartiner aux noisettes",
                    "ref" => "0202R038",
                    "weight" => "500",
                    "packaging" => "24 x Seau / Carton",
                    "tc_20" => "800 Carton",
                    "tc_40" => "1612 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Pâtes à tartiner",
                    "product_name" => "TARTINA choco Noisettes",
                    "product_description" => "Pâtes à tartiner aux noisettes",
                    "ref" => "0202R034",
                    "weight" => "1000",
                    "packaging" => "12 x Seau / Carton",
                    "tc_20" => "795 Carton",
                    "tc_40" => "1590 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Pâtes à tartiner",
                    "product_name" => "PRALINA CHOCO",
                    "product_description" => "Pâte à Tartiner aux Noisettes",
                    "ref" => "0202R006",
                    "weight" => "350",
                    "packaging" => "15 x Verre / Carton",
                    "tc_20" => "2500 Carton",
                    "tc_40" => "5300 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Pâtes à tartiner",
                    "product_name" => "PRALINA CHOCO",
                    "product_description" => "Pâte à Tartiner aux Noisettes",
                    "ref" => "0202R007",
                    "weight" => "750",
                    "packaging" => "9 x Verre / Carton",
                    "tc_20" => "2290 Carton",
                    "tc_40" => "4750 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Pâtes à tartiner",
                    "product_name" => "TARTINA CHOCO NOISETTES",
                    "product_description" => "Pâte à Tartiner au Cacao et Noisettes",
                    "ref" => "0202R26",
                    "weight" => "225",
                    "packaging" => "24 x Pot / Carton",
                    "tc_20" => "1540 Carton",
                    "tc_40" => "3310 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Pâtes à tartiner",
                    "product_name" => "TARTINA CHOCO FRAISE",
                    "product_description" => "Pâte à Tartiner au Cacao et Crème Fraise",
                    "ref" => "0202R27",
                    "weight" => "225",
                    "packaging" => "24 x Pot / Carton",
                    "tc_20" => "1540 Carton",
                    "tc_40" => "3310 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Pâtes à tartiner",
                    "product_name" => "MERIENDA CHOCO",
                    "product_description" => "Pâte à Tartiner",
                    "ref" => "0202R29",
                    "weight" => "225",
                    "packaging" => "24 x Verre / Carton",
                    "tc_20" => "1760 Carton",
                    "tc_40" => "3770 Carton"
                ],

                // ?tablettes de chocolats
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN NOIR",
                    "product_description" => "Tablette de Chocolat 73% de Cacao",
                    "ref" => "0201T07",
                    "weight" => "100",
                    "packaging" => "10 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1810 Carton",
                    "tc_40" => "3890 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT NOIR EXTRA FIN AUX AMANDES",
                    "product_description" => "Tablette de Chocolat 73% de Cacao",
                    "ref" => "0201T020",
                    "weight" => "100",
                    "packaging" => "10 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1810 Carton",
                    "tc_40" => "3890 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN LAIT",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T006",
                    "weight" => "100",
                    "packaging" => "10 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1810 Carton",
                    "tc_40" => "3890 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN AMANDE",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T16",
                    "weight" => "100",
                    "packaging" => "10 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1810 Carton",
                    "tc_40" => "3890 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN MIXTE",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T17",
                    "weight" => "100",
                    "packaging" => "10 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1810 Carton",
                    "tc_40" => "3890 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN MOKA",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T18",
                    "weight" => "100",
                    "packaging" => "10 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1810 Carton",
                    "tc_40" => "3890 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN NOISETTES",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T19",
                    "weight" => "100",
                    "packaging" => "10 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1810 Carton",
                    "tc_40" => "3890 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT FONDANT NOIR",
                    "product_description" => "Tablette de Chocolat 73% de Cacao",
                    "ref" => "0201T042",
                    "weight" => "150",
                    "packaging" => "6 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1690 Carton",
                    "tc_40" => "3630 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT FONDANT AU LAIT",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T043",
                    "weight" => "150",
                    "packaging" => "6 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1690 Carton",
                    "tc_40" => "3630 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT FONDANT LAIT & NOISETTES",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T044",
                    "weight" => "150",
                    "packaging" => "6 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1690 Carton",
                    "tc_40" => "3630 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT FONDANT LAIT & AMANDES",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T045",
                    "weight" => "150",
                    "packaging" => "6 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1690 Carton",
                    "tc_40" => "3630 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT SUPERIEUR NOIR",
                    "product_description" => "Tablette de Chocolat 73% de Cacao",
                    "ref" => "0201T09",
                    "weight" => "180",
                    "packaging" => "5 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1610 Carton",
                    "tc_40" => "3460 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT DESSERT",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T10",
                    "weight" => "180",
                    "packaging" => "5 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1610 Carton",
                    "tc_40" => "3460 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT SUPERIEUR LAIT",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T08",
                    "weight" => "180",
                    "packaging" => "5 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1610 Carton",
                    "tc_40" => "3460 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN NOIR",
                    "product_description" => "Tablette de Chocolat 73% de Cacao",
                    "ref" => "0201T002",
                    "weight" => "40",
                    "packaging" => "10 Boîte de 20 x Tablette / Carton",
                    "tc_20" => "1580 Carton",
                    "tc_40" => "3400 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN LAIT",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T001",
                    "weight" => "40",
                    "packaging" => "10 Boîte de 20 x Tablette / Carton",
                    "tc_20" => "1580 Carton",
                    "tc_40" => "3400 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN DESSERT",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T003",
                    "weight" => "40",
                    "packaging" => "10 Boîte de 20 x Tablette / Carton",
                    "tc_20" => "1580 Carton",
                    "tc_40" => "3400 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN BLANC CHAMONIX",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T038",
                    "weight" => "40",
                    "packaging" => "10 Boîte de 20 x Tablette / Carton",
                    "tc_20" => "1580 Carton",
                    "tc_40" => "3400 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN ALMENDRA",
                    "product_description" => "Tablettes de chocolats",
                    "ref" => "0201T012",
                    "weight" => "50",
                    "packaging" => "10 Boîte de 20 x Tablette / Carton",
                    "tc_20" => "1520 Carton",
                    "tc_40" => "3260 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN NOISETTES",
                    "product_description" => "Tablettes de chocolats",
                    "ref" => "0201T022",
                    "weight" => "50",
                    "packaging" => "10 Boîte de 20 x Tablette / Carton",
                    "tc_20" => "1520 Carton",
                    "tc_40" => "3260 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN PRALINÉ",
                    "product_description" => "Tablettes de chocolats",
                    "ref" => "0201T26",
                    "weight" => "50",
                    "packaging" => "10 Boîte de 20 x Tablette / Carton",
                    "tc_20" => "1520 Carton",
                    "tc_40" => "3260 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN FRAISE",
                    "product_description" => "Tablettes de chocolats",
                    "ref" => "0201T27",
                    "weight" => "50",
                    "packaging" => "10 Boîte de 20 x Tablette / Carton",
                    "tc_20" => "1520 Carton",
                    "tc_40" => "3260 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN TUTTI FRUTTI",
                    "product_description" => "Tablettes de chocolats",
                    "ref" => "0201T028",
                    "weight" => "50",
                    "packaging" => "10 Boîte de 20 x Tablette / Carton",
                    "tc_20" => "1520 Carton",
                    "tc_40" => "3260 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN MOKA",
                    "product_description" => "Tablettes de chocolats",
                    "ref" => "0201T029",
                    "weight" => "50",
                    "packaging" => "10 Boîte de 20 x Tablette / Carton",
                    "tc_20" => "1520 Carton",
                    "tc_40" => "3260 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN ALMENDRA 15g",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T037",
                    "weight" => "15",
                    "packaging" => "12 Boîte de 30 x Tablette / Carton",
                    "tc_20" => "1740 Carton",
                    "tc_40" => "3740 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN NOISETTES 15g",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T036",
                    "weight" => "15",
                    "packaging" => "12 Boîte de 30 x Tablette / Carton",
                    "tc_20" => "1740 Carton",
                    "tc_40" => "3740 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN PRALINÉ 15g",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T032",
                    "weight" => "15",
                    "packaging" => "12 Boîte de 30 x Tablette / Carton",
                    "tc_20" => "1740 Carton",
                    "tc_40" => "3740 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN FRAISE 15g",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T33",
                    "weight" => "15",
                    "packaging" => "12 Boîte de 30 x Tablette / Carton",
                    "tc_20" => "1520 Carton",
                    "tc_40" => "3260 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOLAT EXTRA FIN TUTTI FRUTTI 15g",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T034",
                    "weight" => "15",
                    "packaging" => "12 Boîte de 30 x Tablette / Carton",
                    "tc_20" => "1740 Carton",
                    "tc_40" => "3740 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "HOCOLAT EXTRA FIN MOKA 15g",
                    "product_description" => "Tablette de Chocolat",
                    "ref" => "0201T035",
                    "weight" => "15",
                    "packaging" => "12 Boîte de 30 x Tablette / Carton",
                    "tc_20" => "1740 Carton",
                    "tc_40" => "3740 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "MARYZA",
                    "product_description" => "Succédané de chocolat au lait & amandes",
                    "ref" => "0202T02",
                    "weight" => "200",
                    "packaging" => "10 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1740 Carton",
                    "tc_40" => "3730 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "MARYZA",
                    "product_description" => "Succédané de chocolat au lait & amandes",
                    "ref" => "0202T01",
                    "weight" => "100",
                    "packaging" => "10 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1740 Carton",
                    "tc_40" => "3730 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOMIX LAIT & AMANDES",
                    "product_description" => "Succédané de chocolat au lait & amandes",
                    "ref" => "0202T03",
                    "weight" => "150",
                    "packaging" => "8 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1600 Carton",
                    "tc_40" => "3440 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Tablettes de chocolats",
                    "product_name" => "CHOCOMIX LAIT & NOISETTES",
                    "product_description" => "Succédané de chocolat au lait & noisettes",
                    "ref" => "0202T04",
                    "weight" => "150",
                    "packaging" => "8 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1600 Carton",
                    "tc_40" => "3440 Carton"
                ],

                // ?Chocolats variés
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "VICTORIA B.P.",
                    "product_description" => "Assortiment De Chocolats et Toffées",
                    "ref" => "0202R14",
                    "weight" => "700",
                    "packaging" => "12 x Boîte / Carton",
                    "tc_20" => "570 Carton",
                    "tc_40" => "1230 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "VICTORIA B.P.",
                    "product_description" => "Assortiment De Chocolats et Toffées",
                    "ref" => "0202R13",
                    "weight" => "500",
                    "packaging" => "24 x Boîte / Carton",
                    "tc_20" => "530 Carton",
                    "tc_40" => "1140 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "VICTORIA B.P.",
                    "product_description" => "Assortiment De Chocolats et Toffées",
                    "ref" => "0202R12",
                    "weight" => "300",
                    "packaging" => "24 x Boîte / Carton",
                    "tc_20" => "1590 Carton",
                    "tc_40" => "3400 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "VICTORIA ASSORTIMENT",
                    "product_description" => "Assortiment De Chocolats et Toffées",
                    "ref" => "0601I26",
                    "weight" => "150",
                    "packaging" => "15 x Sachet / Carton",
                    "tc_20" => "3130 Carton",
                    "tc_40" => "6720 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "VICTORIA ASSORTIMENT",
                    "product_description" => "Assortiment De Chocolats et Toffées",
                    "ref" => "0202R21",
                    "weight" => "400",
                    "packaging" => "18 x Sachet / Carton",
                    "tc_20" => "740 Carton",
                    "tc_40" => "1580 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "VICTORIA ASSORTIMENT",
                    "product_description" => "Assortiment De Chocolats et Toffées",
                    "ref" => "0202R16",
                    "weight" => "800",
                    "packaging" => "12 x Sachet / Carton",
                    "tc_20" => "1000 Carton",
                    "tc_40" => "2150 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "VIVALIA FOURRÉ CRÈME FRUITÉ",
                    "product_description" => "Chocolat Fourré Crème Fruité",
                    "ref" => "0202 R 052",
                    "weight" => "1200",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "975 Carton",
                    "tc_40" => "2000 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "VIVALIA FOURRÉ CARAMEL",
                    "product_description" => "Chocolat Fourré Caramel",
                    "ref" => "0202 R 053",
                    "weight" => "1200",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "975 Carton",
                    "tc_40" => "2000 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "VIVALIA FOURRÉ CRÈME NOISETTES",
                    "product_description" => "Chocolat Fourré Crème Noisettes",
                    "ref" => "0202 R 054",
                    "weight" => "1200",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "975 Carton",
                    "tc_40" => "2000 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "VIVALIA FOURRÉ CRÈME CAFÉ",
                    "product_description" => "Chocolat Fourré Crème Café",
                    "ref" => "0202 R 055",
                    "weight" => "1200",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "975 Carton",
                    "tc_40" => "2000 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "NOVA Caramel",
                    "product_description" => "Chocolat fourré caramelé",
                    "ref" => "0202 R 061",
                    "weight" => "0",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "975 Carton",
                    "tc_40" => "2000 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "NOVA Amandes",
                    "product_description" => "Chocolat fourré crème goût amandes",
                    "ref" => "0202 R 062",
                    "weight" => "0",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "975 Carton",
                    "tc_40" => "2000 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "NOVA Noisettes",
                    "product_description" => "Chocolat fourré crème goût noisettes",
                    "ref" => "0202 R 063",
                    "weight" => "0",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "975 Carton",
                    "tc_40" => "2000 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "NOVA Pistaches",
                    "product_description" => "Chocolat fourré crème goût pistaches",
                    "ref" => "0202 R 064",
                    "weight" => "0",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "975 Carton",
                    "tc_40" => "2000 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "NOVA Café",
                    "product_description" => "Chocolat fourré crème goût café",
                    "ref" => "0202 R 065",
                    "weight" => "0",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "975 Carton",
                    "tc_40" => "2000 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "MOMENT Chocolat Fourré Crème Noisettes",
                    "product_description" => "Chocolat au lait fourré crème noisettes",
                    "ref" => "0202 R 066",
                    "weight" => "0",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "975 Carton",
                    "tc_40" => "2000 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "MOMENT Chocolat Fourré Crème Amandes",
                    "product_description" => "Chocolat au lait fourré crème amandes",
                    "ref" => "0202 R 067",
                    "weight" => "0",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "975 Carton",
                    "tc_40" => "2000 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "MOMENT Chocolat Fourré Crème Fraises",
                    "product_description" => "Chocolat au lait fourré crème fraises",
                    "ref" => "0202 R 068",
                    "weight" => "0",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "975 Carton",
                    "tc_40" => "2000 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "MOMENT Chocolat Fourré Caramel",
                    "product_description" => "Chocolat au lait fourré caramel",
                    "ref" => "0202 R 069",
                    "weight" => "0",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "975 Carton",
                    "tc_40" => "2000 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "MOMENT Chocolat Fourré crème cacahuètes",
                    "product_description" => "Chocolat au lait fourré crème cacahuètes",
                    "ref" => "0202 R 077",
                    "weight" => "0",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "975 Carton",
                    "tc_40" => "2000 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "VIVALIA Assortiment",
                    "product_description" => "Assortiment de Chocolats",
                    "ref" => "0202 R 075",
                    "weight" => "260",
                    "packaging" => "24 x Boîte plastique / Carton",
                    "tc_20" => "1590 Carton",
                    "tc_40" => "3400 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "VIVALIA Assortiment",
                    "product_description" => "Assortiment de Chocolats",
                    "ref" => "0202 R 076",
                    "weight" => "500",
                    "packaging" => "12 x Boîte plastique / Carton",
                    "tc_20" => "570 Carton",
                    "tc_40" => "1230 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "NOVA Assortiment",
                    "product_description" => "Assortiment de Chocolats",
                    "ref" => "0202 R 71",
                    "weight" => "260",
                    "packaging" => "24 x Boîte plastique / Carton",
                    "tc_20" => "1590 Carton",
                    "tc_40" => "3400 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "NOVA Assortiment",
                    "product_description" => "Assortiment de Chocolats",
                    "ref" => "0202 R 72",
                    "weight" => "500",
                    "packaging" => "12 x Boîte plastique / Carton",
                    "tc_20" => "570 Carton",
                    "tc_40" => "1230 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "MOMENT Assortiment",
                    "product_description" => "Assortiment de Chocolats",
                    "ref" => "0202 R 073",
                    "weight" => "260",
                    "packaging" => "24 x Boîte plastique / Carton",
                    "tc_20" => "1590 Carton",
                    "tc_40" => "3400 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "MOMENT Assortiment",
                    "product_description" => "Assortiment de Chocolats",
                    "ref" => "0202 R 074",
                    "weight" => "500",
                    "packaging" => "12 x Boîte plastique / Carton",
                    "tc_20" => "570 Carton",
                    "tc_40" => "1230 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "CHOCOLAT MONOGRAM NOIR",
                    "product_description" => "Chocolat Monogram 73% de Cacao",
                    "ref" => "0201T060",
                    "weight" => "800",
                    "packaging" => "6 x Boîte de 60 pièces / Carton",
                    "tc_20" => "1580 Carton",
                    "tc_40" => "3400 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "CHOCOLAT MONOGRAM AU LAIT",
                    "product_description" => "Chocolat Monogram",
                    "ref" => "0201T061",
                    "weight" => "800",
                    "packaging" => "6 x Boîte de 60 pièces / Carton",
                    "tc_20" => "1580 Carton",
                    "tc_40" => "3400 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "HOCOLAT MONOGRAM AU LAIT & AMANDES",
                    "product_description" => "Chocolat Monogram",
                    "ref" => "0201T062",
                    "weight" => "800",
                    "packaging" => "6 x Boîte de 60 pièces / Carton",
                    "tc_20" => "1580 Carton",
                    "tc_40" => "3400 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "CHOCOLAT MONOGRAM AU LAIT & NOISETTES",
                    "product_description" => "Chocolat Monogram",
                    "ref" => "0201T063",
                    "weight" => "800",
                    "packaging" => "6 x Boîte de 60 pièces / Carton",
                    "tc_20" => "1580 Carton",
                    "tc_40" => "3400 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "CHOCOLAT AU LAIT & AMANDES",
                    "product_description" => "Chocolat REGAL",
                    "ref" => "0202R030",
                    "weight" => "1000",
                    "packaging" => "6 x Boîte de 100 pièces / Carton",
                    "tc_20" => "1120 Carton",
                    "tc_40" => "2400 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "CHOCOLAT AU LAIT & NOISETTES",
                    "product_description" => "Chocolat REGAL",
                    "ref" => "0202R031",
                    "weight" => "1000",
                    "packaging" => "6 x Boîte de 100 pièces / Carton",
                    "tc_20" => "1120 Carton",
                    "tc_40" => "2400 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "CHOCOLAT AU LAIT & CARAMEL",
                    "product_description" => "Chocolat REGAL",
                    "ref" => "0202R032",
                    "weight" => "1000",
                    "packaging" => "6 x Boîte de 100 pièces / Carton",
                    "tc_20" => "1120 Carton",
                    "tc_40" => "2400 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "CHOCOLAT AU LAIT & CEREALES",
                    "product_description" => "Chocolat REGAL",
                    "ref" => "0202R033",
                    "weight" => "1000",
                    "packaging" => "6 x Boîte de 100 pièces / Carton",
                    "tc_20" => "1120 Carton",
                    "tc_40" => "2400 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "SELECTION NOIR",
                    "product_description" => "Napolitaines de Chocolat 73% de Cacao",
                    "ref" => "0201T50",
                    "weight" => "500",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "1670 Carton",
                    "tc_40" => "3590 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "SELECTION LAIT",
                    "product_description" => "Napolitaines de chocolat",
                    "ref" => "0201T51",
                    "weight" => "500",
                    "packaging" => "6 x Boîte plastique de 100 pièces / Carton",
                    "tc_20" => "1670 Carton",
                    "tc_40" => "3590 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "DEGUSTATION NOIR",
                    "product_description" => "Napolitaines de Chocolat 73% de Cacao",
                    "ref" => "0201T56",
                    "weight" => "500",
                    "packaging" => "12 x Boîte display de 100 pièces / Carton",
                    "tc_20" => "1500 Carton",
                    "tc_40" => "3200 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "DELINOISE",
                    "product_description" => "Chocolat au lait fourré praliné et noisettes",
                    "ref" => "0202R36",
                    "weight" => "480",
                    "packaging" => "12 x Boîte plastique de 40 pièces / Carton",
                    "tc_20" => "1510 Carton",
                    "tc_40" => "3240 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "DELINOISE",
                    "product_description" => "Chocolat au lait fourré praliné et noisettes",
                    "ref" => "0202R35",
                    "weight" => "960",
                    "packaging" => "6 x Boîte plastique de 80 pièces / Carton",
                    "tc_20" => "1510 Carton",
                    "tc_40" => "3240 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "EXCELLENCE",
                    "product_description" => "Assortiment de chocolats fourrés",
                    "ref" => "0202R19",
                    "weight" => "200",
                    "packaging" => "12 x Boîte plastique / Carton",
                    "tc_20" => "1800 Carton",
                    "tc_40" => "3870 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "DELINOISE",
                    "product_description" => "Chocolat au lait fourré praliné et noisettes",
                    "ref" => "0202R37",
                    "weight" => "720",
                    "packaging" => "8 x Boîte display de 60 pièces / Carton",
                    "tc_20" => "1890 Carton",
                    "tc_40" => "4050 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "DELINOISE",
                    "product_description" => "Chocolat au lait fourré praliné et noisettes",
                    "ref" => "0202R38",
                    "weight" => "650",
                    "packaging" => "9 Boîte de 18 x Sachet de 3 pièces / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "EXCELLENCE",
                    "product_description" => "Assortiment de chocolats fourrés",
                    "ref" => "0601I27",
                    "weight" => "100",
                    "packaging" => "18 x Sachet / Carton",
                    "tc_20" => "3130 Carton",
                    "tc_40" => "6720 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "EXCELLENCE",
                    "product_description" => "Assortiment de chocolats fourrés",
                    "ref" => "0202R25",
                    "weight" => "800",
                    "packaging" => "12 x Sachet / Carton",
                    "tc_20" => "810 Carton",
                    "tc_40" => "1740 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "EXCELLENCE",
                    "product_description" => "Assortiment de chocolats fourrés",
                    "ref" => "0202R24",
                    "weight" => "400",
                    "packaging" => "21 x Sachet / Carton",
                    "tc_20" => "600 Carton",
                    "tc_40" => "1290 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "CHOCOLAT BOULE D'OR",
                    "product_description" => "Assortiment de chocolats au lait fourrés",
                    "ref" => "0202R39",
                    "weight" => "780",
                    "packaging" => "15 x Boîte display de 75 pièces / Carton",
                    "tc_20" => "1080 Carton",
                    "tc_40" => "2310 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "CROKI AMANDES",
                    "product_description" => "Amandes Enrobées au Chocolat Noir",
                    "ref" => "0201T30",
                    "weight" => "50",
                    "packaging" => "8 x Boîte de 16 pièces / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "CROKI ORANGE",
                    "product_description" => "Écorces D'oranges Confites Enrobées de Chocolat Noir",
                    "ref" => "0201T31",
                    "weight" => "50",
                    "packaging" => "8 x Boîte de 16 pièces / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "COQUILLE",
                    "product_description" => "Sucre Chocolaté Fourré",
                    "ref" => "0202R09",
                    "weight" => "400",
                    "packaging" => "28 x Boîte de 60 pièces / Carton",
                    "tc_20" => "1080 Carton",
                    "tc_40" => "2330 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "COQUILLE CRÈME",
                    "product_description" => "Sucre Chocolaté Fourré",
                    "ref" => "0202R15",
                    "weight" => "400",
                    "packaging" => "28 x Boîte de 60 pièces / Carton",
                    "tc_20" => "1080 Carton",
                    "tc_40" => "2330 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "REGAL PRALINÉ",
                    "product_description" => "Sucre Chocolaté Fourré",
                    "ref" => "0202R17",
                    "weight" => "650",
                    "packaging" => "18 x Boîte de 60 pièces / Carton",
                    "tc_20" => "1730 Carton",
                    "tc_40" => "3720 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "CORDA",
                    "product_description" => "Sucre Chocolaté Fourré",
                    "ref" => "0202R41",
                    "weight" => "720",
                    "packaging" => "24 x Boîte de 64 pièces / Carton",
                    "tc_20" => "1270 Carton",
                    "tc_40" => "2730 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats variés",
                    "product_name" => "BIGO BOULE",
                    "product_description" => "Sucre Chocolaté Fourré",
                    "ref" => "0202R40",
                    "weight" => "650",
                    "packaging" => "24 x Boîte de 60 pièces / Carton",
                    "tc_20" => "1270 Carton",
                    "tc_40" => "2730 Carton"
                ],


                // ?chocolats sans sucre
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats sans sucre",
                    "product_name" => "CHOCOLAT LIGHT NOIR",
                    "product_description" => "Chocolat Sans Sucre 73 % de Cacao",
                    "ref" => "0201T04",
                    "weight" => "100",
                    "packaging" => "10 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "3290 Carton",
                    "tc_40" => "6970 Carton"
                ],
                [
                    "parent_category_name" => "Chocolat",
                    "category_name" => "Chocolats sans sucre",
                    "product_name" => "CHOCOLAT LIGHT AU LAIT",
                    "product_description" => "Chocolat Sans Sucre",
                    "ref" => "0201T05",
                    "weight" => "100",
                    "packaging" => "10 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "3290 Carton",
                    "tc_40" => "6970 Carton"
                ],


            ],

            "Fêtes et événements" => [
                // ?Chocolats fins fourrés
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Chocolats fins fourrés",
                    "product_name" => "DÉLICES NOIR",
                    "product_description" => "Assortiment De Chocolats Fins",
                    "ref" => "0401L001",
                    "weight" => "135",
                    "packaging" => "18 x Boîte carton / Carton",
                    "tc_20" => "1710 Carton",
                    "tc_40" => "3670 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Chocolats fins fourrés",
                    "product_name" => "COLLECTION 145gr",
                    "product_description" => "Assortiment De Chocolats Fins",
                    "ref" => "0401L002",
                    "weight" => "145",
                    "packaging" => "12 x Boîte carton / Carton",
                    "tc_20" => "590 Carton",
                    "tc_40" => "1270 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Chocolats fins fourrés",
                    "product_name" => "DIAMANTS",
                    "product_description" => "Assortiment De Chocolats Fins",
                    "ref" => "0401L005",
                    "weight" => "220",
                    "packaging" => "10 x Boîte carton / Carton",
                    "tc_20" => "1710 Carton",
                    "tc_40" => "3670 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Chocolats fins fourrés",
                    "product_name" => "DIAMANTS",
                    "product_description" => "Assortiment De Chocolats Fins",
                    "ref" => "0401L003",
                    "weight" => "110",
                    "packaging" => "18 x Boîte carton / Carton",
                    "tc_20" => "1710 Carton",
                    "tc_40" => "3670 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Chocolats fins fourrés",
                    "product_name" => "DUCHESSE",
                    "product_description" => "Assortiment De Chocolats Fins",
                    "ref" => "0401L004",
                    "weight" => "115",
                    "packaging" => "18 x Boîte carton / Carton",
                    "tc_20" => "590 Carton",
                    "tc_40" => "1270 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Chocolats fins fourrés",
                    "product_name" => "COLLECTION 400gr",
                    "product_description" => "Assortiment De Chocolats Fins",
                    "ref" => "0401L017",
                    "weight" => "400",
                    "packaging" => "10 x Boîte carton / Carton",
                    "tc_20" => "590 Carton",
                    "tc_40" => "1270 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Chocolats fins fourrés",
                    "product_name" => "INVITATION",
                    "product_description" => "Assortiment De Chocolats Fins",
                    "ref" => "0401L019",
                    "weight" => "350",
                    "packaging" => "10 x Boîte carton / Carton",
                    "tc_20" => "1710 Carton",
                    "tc_40" => "3670 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Chocolats fins fourrés",
                    "product_name" => "INVITATION",
                    "product_description" => "Assortiment De Chocolats Fins",
                    "ref" => "0401L018",
                    "weight" => "650",
                    "packaging" => "10 x Boîte carton / Carton",
                    "tc_20" => "1710 Carton",
                    "tc_40" => "3670 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Chocolats fins fourrés",
                    "product_name" => "PÂTE D'AMANDE CHOCOLAT",
                    "product_description" => "Assortiment De Chocolats Fins",
                    "ref" => "0401F011",
                    "weight" => "180",
                    "packaging" => "20 x Boîte carton / Carton",
                    "tc_20" => "590 Carton",
                    "tc_40" => "1270 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Chocolats fins fourrés",
                    "product_name" => "BOULE CRÈME CHOCOLAT",
                    "product_description" => "Assortiment De Chocolats Fins",
                    "ref" => "0401F012",
                    "weight" => "180",
                    "packaging" => "20 x Boîte carton / Carton",
                    "tc_20" => "590 Carton",
                    "tc_40" => "1270 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Chocolats fins fourrés",
                    "product_name" => "NOUGATINE CHOCOLAT",
                    "product_description" => "Assortiment De Chocolats Fins",
                    "ref" => "0401F013",
                    "weight" => "200",
                    "packaging" => "20 x Boîte carton / Carton",
                    "tc_20" => "590 Carton",
                    "tc_40" => "1270 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Chocolats fins fourrés",
                    "product_name" => "PRALINÉ CHOCOLAT",
                    "product_description" => "Assortiment De Chocolats Fins",
                    "ref" => "0401F014",
                    "weight" => "180",
                    "packaging" => "20 x Boîte carton / Carton",
                    "tc_20" => "590 Carton",
                    "tc_40" => "1270 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Chocolats fins fourrés",
                    "product_name" => "PETIT ROCHER CHOCOLAT",
                    "product_description" => "Assortiment De Chocolats Fins",
                    "ref" => "0401F015",
                    "weight" => "300",
                    "packaging" => "20 x Boîte carton / Carton",
                    "tc_20" => "590 Carton",
                    "tc_40" => "1270 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Chocolats fins fourrés",
                    "product_name" => "ASSORTIMENT RICHE CHOCOLAT",
                    "product_description" => "Assortiment De Chocolats Fins",
                    "ref" => "0401F016",
                    "weight" => "280",
                    "packaging" => "20 x Boîte carton / Carton",
                    "tc_20" => "590 Carton",
                    "tc_40" => "1270 Carton"
                ],

                // ?Confiserie fine
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Confiserie fine",
                    "product_name" => "DATTES ET NOIX FOURRÉES",
                    "product_description" => "Dattes Et Noix Fourrées",
                    "ref" => "0401F053",
                    "weight" => "2000",
                    "packaging" => "1 x Coffret carton / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Confiserie fine",
                    "product_name" => "DATTES ET NOIX FOURRÉES",
                    "product_description" => "Dattes Et Noix Fourrées",
                    "ref" => "0401F022",
                    "weight" => "1200",
                    "packaging" => "1 x Coffret carton / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Confiserie fine",
                    "product_name" => "DATTES ET NOIX FOURRÉES",
                    "product_description" => "Dattes Et Noix Fourrées",
                    "ref" => "0401F021",
                    "weight" => "750",
                    "packaging" => "1 x Coffret carton / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Confiserie fine",
                    "product_name" => "DATTES ET NOIX FOURRÉES",
                    "product_description" => "Dattes Et Noix Fourrées",
                    "ref" => "0401F07",
                    "weight" => "600",
                    "packaging" => "1 x Boîte plastique / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Confiserie fine",
                    "product_name" => "DATTES ET NOIX FOURRÉES",
                    "product_description" => "Dattes Et Noix Fourrées",
                    "ref" => "0401F06",
                    "weight" => "360",
                    "packaging" => "1 x Boîte plastique / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Confiserie fine",
                    "product_name" => "COLIS CADEAU",
                    "product_description" => "Confiserie, Coffret Carton Prêt à Expédier",
                    "ref" => "0401F010",
                    "weight" => "2000",
                    "packaging" => "1 x Colis cadeau / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Confiserie fine",
                    "product_name" => "COLIS CADEAU",
                    "product_description" => "Confiserie, Coffret Carton Prêt à Expédier",
                    "ref" => "0401F09",
                    "weight" => "1.2000",
                    "packaging" => "1 x Colis cadeau / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Confiserie fine",
                    "product_name" => "COLIS CADEAU",
                    "product_description" => "Confiserie, Coffret Carton Prêt à Expédier",
                    "ref" => "0401F08",
                    "weight" => "700",
                    "packaging" => "1 x Colis cadeau / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Confiserie fine",
                    "product_name" => "FONDANT",
                    "product_description" => "Fondant",
                    "ref" => "0401F026",
                    "weight" => "500",
                    "packaging" => "1 x Boîte plastique / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Confiserie fine",
                    "product_name" => "FONDANT",
                    "product_description" => "Fondant",
                    "ref" => "0401F025",
                    "weight" => "360",
                    "packaging" => "1 x Boîte plastique / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Confiserie fine",
                    "product_name" => "PRALINÉ AMANDE",
                    "product_description" => "Praliné Amande",
                    "ref" => "0401F028",
                    "weight" => "600",
                    "packaging" => "1 x Boîte plastique / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Confiserie fine",
                    "product_name" => "PRALINÉ AMANDE",
                    "product_description" => "Praliné Amande",
                    "ref" => "0401F027",
                    "weight" => "360",
                    "packaging" => "1 x Boîte plastique / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Confiserie fine",
                    "product_name" => "PÂTE DE FRUITS",
                    "product_description" => "Pâte De Fruits",
                    "ref" => "0401F030",
                    "weight" => "500",
                    "packaging" => "1 x Boîte plastique / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Confiserie fine",
                    "product_name" => "PÂTE DE FRUITS",
                    "product_description" => "Pâte De Fruits",
                    "ref" => "0401F029",
                    "weight" => "250",
                    "packaging" => "1 x Boîte plastique / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Confiserie fine",
                    "product_name" => "DRAGÉES",
                    "product_description" => "Dragées",
                    "ref" => "0401F048",
                    "weight" => "500",
                    "packaging" => "1 x Boîte plastique / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Confiserie fine",
                    "product_name" => "DRAGÉES",
                    "product_description" => "Dragées",
                    "ref" => "0401F047",
                    "weight" => "360",
                    "packaging" => "1 x Boîte plastique / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Confiserie fine",
                    "product_name" => "PINONES",
                    "product_description" => "Pinones",
                    "ref" => "0401F049",
                    "weight" => "300",
                    "packaging" => "1 x Boîte plastique / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Confiserie fine",
                    "product_name" => "COFFRET CONFISEUR N°2",
                    "product_description" => "Confiserie",
                    "ref" => "0401F061",
                    "weight" => "400",
                    "packaging" => "1 x Coffret carton / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Confiserie fine",
                    "product_name" => "COFFRET CONFISEUR N°3",
                    "product_description" => "Confiserie",
                    "ref" => "0401F060",
                    "weight" => "600",
                    "packaging" => "1 x Coffret carton / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Confiserie fine",
                    "product_name" => "COFFRET CONFISEUR N°4",
                    "product_description" => "Confiserie",
                    "ref" => "0401F059",
                    "weight" => "1300",
                    "packaging" => "1 x Coffret carton / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Confiserie fine",
                    "product_name" => "COFFRET CONFISEUR N°5",
                    "product_description" => "Confiserie",
                    "ref" => "0401F058",
                    "weight" => "250",
                    "packaging" => "1 x Coffret carton / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Confiserie fine",
                    "product_name" => "BOITE LIVRE",
                    "product_description" => "Fruits Confits",
                    "ref" => "0401F003",
                    "weight" => "1800",
                    "packaging" => "1 x Boîte livre / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Confiserie fine",
                    "product_name" => "FRUITS PAQUE",
                    "product_description" => "Fruits Paque",
                    "ref" => "0501Q020",
                    "weight" => "1800",
                    "packaging" => "1 x Boîte livre / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],


                // ?Fruits confits
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Fruits confits",
                    "product_name" => "FRUITS CONFITS",
                    "product_description" => "Assortiment de Fruits Confits",
                    "ref" => "0401F023",
                    "weight" => "700",
                    "packaging" => "20 x Coffret carton / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Fruits confits",
                    "product_name" => "MANDARINES CONFITES",
                    "product_description" => "Mandarines Confites",
                    "ref" => "0401F024",
                    "weight" => "700",
                    "packaging" => "20 x Coffret carton / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],

                // ?Nougat
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Nougat",
                    "product_name" => "TURRON SUPREMA JIJONA",
                    "product_description" => "Nougat",
                    "ref" => "0401F031",
                    "weight" => "250",
                    "packaging" => "1 x Coffret carton / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Nougat",
                    "product_name" => "TURRON SUPREMA ALICANTE",
                    "product_description" => "Nougat",
                    "ref" => "0401F032",
                    "weight" => "250",
                    "packaging" => "1 x Coffret carton / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Nougat",
                    "product_name" => "TURRON FRUTA",
                    "product_description" => "Nougat",
                    "ref" => "0401F037",
                    "weight" => "200",
                    "packaging" => "1 x Coffret carton / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Nougat",
                    "product_name" => "AMANDES FOURRÉES",
                    "product_description" => "Nougat",
                    "ref" => "0401F040",
                    "weight" => "200",
                    "packaging" => "1 x Coffret carton / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Nougat",
                    "product_name" => "PASTELLES PM",
                    "product_description" => "Pâte d'Amande",
                    "ref" => "0401F042",
                    "weight" => "660",
                    "packaging" => "1 x Coffret carton / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Nougat",
                    "product_name" => "PASTELLES PM",
                    "product_description" => "Pâte d'Amande",
                    "ref" => "0401F041",
                    "weight" => "330",
                    "packaging" => "1 x Coffret carton / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Nougat",
                    "product_name" => "POLVORONES PM",
                    "product_description" => "Pâte d'Amande",
                    "ref" => "0401F044",
                    "weight" => "700",
                    "packaging" => "1 x Coffret carton / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],
                [
                    "parent_category_name" => "Fêtes et événements",
                    "category_name" => "Nougat",
                    "product_name" => "POLVORONES PM",
                    "product_description" => "Pâte d'Amande",
                    "ref" => "0401F043",
                    "weight" => "350",
                    "packaging" => "1 x Coffret carton / Carton",
                    "tc_20" => "0 Carton",
                    "tc_40" => "0 Carton"
                ],


            ],
            "Gaufrettes" => [
                // ?Gaufrettes enrobées

                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes enrobées",
                    "product_name" => "KIK'S",
                    "product_description" => "Chocolat au lailt fourré de gaufrettes avec crème",
                    "ref" => "0201T41",
                    "weight" => "750",
                    "packaging" => "8 x Boîte de 36 pièces / Carton",
                    "tc_20" => "1000 Carton",
                    "tc_40" => "2160 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes enrobées",
                    "product_name" => "MATCH",
                    "product_description" => "Chocolat au lailt fourré de gaufrettes avec crème",
                    "ref" => "0201T040",
                    "weight" => "720",
                    "packaging" => "8 x Boîte de 42 pièces / Carton",
                    "tc_20" => "1530 Carton",
                    "tc_40" => "3180 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes enrobées",
                    "product_name" => "VIVAL NOISETTES",
                    "product_description" => "Gaufrette fourrée et enrobée au cacao",
                    "ref" => "0108G01",
                    "weight" => "120",
                    "packaging" => "8 x Boîte display de 40 pièces / Carton",
                    "tc_20" => "1610 Carton",
                    "tc_40" => "3450 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes enrobées",
                    "product_name" => "VIVAL CACAO",
                    "product_description" => "Gaufrette fourrée et enrobée au cacao",
                    "ref" => "0108G03",
                    "weight" => "120",
                    "packaging" => "8 x Boîte display de 40 pièces / Carton",
                    "tc_20" => "1610 Carton",
                    "tc_40" => "3450 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes enrobées",
                    "product_name" => "VIVAL VANILLE",
                    "product_description" => "Gaufrette fourrée et enrobée au cacao",
                    "ref" => "0108G02",
                    "weight" => "120",
                    "packaging" => "8 x Boîte display de 40 pièces / Carton",
                    "tc_20" => "1610 Carton",
                    "tc_40" => "3450 Carton"
                ],

                // ?Gaufrettes fourrées

                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes fourrées",
                    "product_name" => "FAMILY CACAO",
                    "product_description" => "Gaufrette croustillante fourrée à la crème",
                    "ref" => "0107G03",
                    "weight" => "170",
                    "packaging" => "28 x Sachet / Carton",
                    "tc_20" => "1610 Carton",
                    "tc_40" => "3450 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes fourrées",
                    "product_name" => "FAMILY NOISETTE",
                    "product_description" => "Gaufrette croustillante fourrée à la crème",
                    "ref" => "0107G02",
                    "weight" => "170",
                    "packaging" => "28 x Sachet / Carton",
                    "tc_20" => "1610 Carton",
                    "tc_40" => "3450 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes fourrées",
                    "product_name" => "FAMILY VANILLE",
                    "product_description" => "Gaufrette croustillante fourrée à la crème",
                    "ref" => "0107G01",
                    "weight" => "170",
                    "packaging" => "28 x Sachet / Carton",
                    "tc_20" => "1610 Carton",
                    "tc_40" => "3450 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes fourrées",
                    "product_name" => "FAMILY VANILLE",
                    "product_description" => "Gaufrette croustillante fourrée à la crème",
                    "ref" => "0107G01",
                    "weight" => "170",
                    "packaging" => "28 x Sachet / Carton",
                    "tc_20" => "1610 Carton",
                    "tc_40" => "3450 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes fourrées",
                    "product_name" => "FANCY CITRON",
                    "product_description" => "Gaufrette croustillante fourrée à la crème",
                    "ref" => "0105G01",
                    "weight" => "90",
                    "packaging" => "20 x Sachet / Carton",
                    "tc_20" => "3630 Carton",
                    "tc_40" => "7790 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes fourrées",
                    "product_name" => "FANCY CACAO",
                    "product_description" => "Gaufrette croustillante fourrée à la crème",
                    "ref" => "0105G02",
                    "weight" => "90",
                    "packaging" => "20 x Sachet / Carton",
                    "tc_20" => "3630 Carton",
                    "tc_40" => "7790 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes fourrées",
                    "product_name" => "FANCY FRAISE",
                    "product_description" => "Gaufrette croustillante fourrée à la crème",
                    "ref" => "0105G03",
                    "weight" => "90",
                    "packaging" => "20 x Sachet / Carton",
                    "tc_20" => "3630 Carton",
                    "tc_40" => "7790 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes fourrées",
                    "product_name" => "FANCY VANILLE",
                    "product_description" => "Gaufrette croustillante fourrée à la crème",
                    "ref" => "0105G04",
                    "weight" => "90",
                    "packaging" => "20 x Sachet / Carton",
                    "tc_20" => "3630 Carton",
                    "tc_40" => "7790 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes fourrées",
                    "product_name" => "FANCY NOISETTES",
                    "product_description" => "Gaufrette croustillante fourrée à la crème",
                    "ref" => "0105G05",
                    "weight" => "90",
                    "packaging" => "20 x Sachet / Carton",
                    "tc_20" => "3630 Carton",
                    "tc_40" => "7790 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes fourrées",
                    "product_name" => "CLASSICO NOISETTES",
                    "product_description" => "Gaufrette croustillante fourrée à la crème",
                    "ref" => "0106G11",
                    "weight" => "40",
                    "packaging" => "80 x Sachet / Carton",
                    "tc_20" => "2640 Carton",
                    "tc_40" => "5660 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes fourrées",
                    "product_name" => "CLASSICO VANILLE",
                    "product_description" => "Gaufrette croustillante fourrée à la crème",
                    "ref" => "0106G12",
                    "weight" => "40",
                    "packaging" => "80 x Sachet / Carton",
                    "tc_20" => "2640 Carton",
                    "tc_40" => "5660 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes fourrées",
                    "product_name" => "CLASSICO CAFÉ CRÈME",
                    "product_description" => "Gaufrette croustillante fourrée à la crème",
                    "ref" => "0106G13",
                    "weight" => "40",
                    "packaging" => "80 x Sachet / Carton",
                    "tc_20" => "2640 Carton",
                    "tc_40" => "5660 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes fourrées",
                    "product_name" => "CLASSICO CACAO",
                    "product_description" => "Gaufrette croustillante fourrée à la crème",
                    "ref" => "0106G14",
                    "weight" => "40",
                    "packaging" => "80 x Sachet / Carton",
                    "tc_20" => "2640 Carton",
                    "tc_40" => "5660 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes fourrées",
                    "product_name" => "PETIT PLAISIR CITRON",
                    "product_description" => "Gaufrette croustillante fourrée à la crème",
                    "ref" => "0103G13",
                    "weight" => "30",
                    "packaging" => "56 x Sachet / Carton",
                    "tc_20" => "2960 Carton",
                    "tc_40" => "6350 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes fourrées",
                    "product_name" => "PETIT PLAISIR CACAO",
                    "product_description" => "Gaufrette croustillante fourrée à la crème",
                    "ref" => "0103G15",
                    "weight" => "30",
                    "packaging" => "56 x Sachet / Carton",
                    "tc_20" => "2960 Carton",
                    "tc_40" => "6350 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes fourrées",
                    "product_name" => "PETIT PLAISIR VANILLE",
                    "product_description" => "Gaufrette croustillante fourrée à la crème",
                    "ref" => "0103G14",
                    "weight" => "30",
                    "packaging" => "56 x Sachet / Carton",
                    "tc_20" => "2960 Carton",
                    "tc_40" => "6350 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes fourrées",
                    "product_name" => "TOPPY ABRICOT",
                    "product_description" => "Gaufrette croustillante fourrée à la crème",
                    "ref" => "0104G005",
                    "weight" => "17",
                    "packaging" => "80 x Sachet / Carton",
                    "tc_20" => "3880 Carton",
                    "tc_40" => "8330 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes fourrées",
                    "product_name" => "TOPPY CITRON",
                    "product_description" => "Gaufrette croustillante fourrée à la crème",
                    "ref" => "0104G004",
                    "weight" => "17",
                    "packaging" => "80 x Sachet / Carton",
                    "tc_20" => "3880 Carton",
                    "tc_40" => "8330 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes fourrées",
                    "product_name" => "TOPPY CACAO",
                    "product_description" => "Gaufrette croustillante fourrée à la crème",
                    "ref" => "0104G006",
                    "weight" => "17",
                    "packaging" => "80 x Sachet / Carton",
                    "tc_20" => "3880 Carton",
                    "tc_40" => "8330 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes fourrées",
                    "product_name" => "TOPPY NOISETTES",
                    "product_description" => "Gaufrette croustillante fourrée à la crème",
                    "ref" => "0104G001",
                    "weight" => "17",
                    "packaging" => "80 x Sachet / Carton",
                    "tc_20" => "3880 Carton",
                    "tc_40" => "8330 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes fourrées",
                    "product_name" => "TOPPY FRAISE",
                    "product_description" => "Gaufrette croustillante fourrée à la crème",
                    "ref" => "0104G002",
                    "weight" => "17",
                    "packaging" => "80 x Sachet / Carton",
                    "tc_20" => "3880 Carton",
                    "tc_40" => "8330 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes fourrées",
                    "product_name" => "TOPPY VANILLE",
                    "product_description" => "Gaufrette croustillante fourrée à la crème",
                    "ref" => "0104G003",
                    "weight" => "17",
                    "packaging" => "80 x Sachet / Carton",
                    "tc_20" => "3880 Carton",
                    "tc_40" => "8330 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes fourrées",
                    "product_name" => "L'AS CITRON",
                    "product_description" => "Gaufrette croustillante fourrée à la crème",
                    "ref" => "0106G003",
                    "weight" => "11",
                    "packaging" => "108 x Sachet / Carton",
                    "tc_20" => "4240 Carton",
                    "tc_40" => "9090 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes fourrées",
                    "product_name" => "L'AS CACAO",
                    "product_description" => "Gaufrette croustillante fourrée à la crème",
                    "ref" => "0106G005",
                    "weight" => "11",
                    "packaging" => "108 x Sachet / Carton",
                    "tc_20" => "4240 Carton",
                    "tc_40" => "9090 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes fourrées",
                    "product_name" => "L'AS NOISETTES",
                    "product_description" => "Gaufrette croustillante fourrée à la crème",
                    "ref" => "0106G001",
                    "weight" => "11",
                    "packaging" => "108 x Sachet / Carton",
                    "tc_20" => "4240 Carton",
                    "tc_40" => "9090 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes fourrées",
                    "product_name" => "L'AS FRAISE",
                    "product_description" => "Gaufrette croustillante fourrées à la créme",
                    "ref" => "0106G002",
                    "weight" => "11",
                    "packaging" => "108 x Sachet / Carton",
                    "tc_20" => "4240 Carton",
                    "tc_40" => "9090 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes fourrées",
                    "product_name" => "L'AS VANILLE",
                    "product_description" => "Gaufrette croustillante fourrée à la crème",
                    "ref" => "0106G004",
                    "weight" => "11",
                    "packaging" => "108 x Sachet / Carton",
                    "tc_20" => "4240 Carton",
                    "tc_40" => "9090 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes fourrées",
                    "product_name" => "GAUFRETTES FINES",
                    "product_description" => "Gaufrettes croustillantes fourrées à la crème",
                    "ref" => "0103G054 Cacao",
                    "weight" => "550",
                    "packaging" => "10 x Boîte / Carton",
                    "tc_20" => "1610 Carton",
                    "tc_40" => "3450 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes fourrées",
                    "product_name" => "GAUFRETTES FINES",
                    "product_description" => "Gaufrettes croustillantes fourrées à la crème",
                    "ref" => "0103G053 Citron",
                    "weight" => "550",
                    "packaging" => "10 x Boîte / Carton",
                    "tc_20" => "1610 Carton",
                    "tc_40" => "3450 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes fourrées",
                    "product_name" => "GAUFRETTES FINES",
                    "product_description" => "Gaufrettes croustillantes fourrées à la crème",
                    "ref" => "0103G052 Fraise",
                    "weight" => "550",
                    "packaging" => "10 x Boîte / Carton",
                    "tc_20" => "1610 Carton",
                    "tc_40" => "3450 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes fourrées",
                    "product_name" => "GAUFRETTES FINES",
                    "product_description" => "Gaufrettes croustillantes fourrées à la crème",
                    "ref" => "0103G051 Noisettes",
                    "weight" => "550",
                    "packaging" => "10 x Boîte / Carton",
                    "tc_20" => "1610 Carton",
                    "tc_40" => "3450 Carton"
                ],
                [
                    "parent_category_name" => "Gaufrettes",
                    "category_name" => "Gaufrettes fourrées",
                    "product_name" => "GAUFRETTES FINES",
                    "product_description" => "Gaufrettes croustillantes fourrées à la crème",
                    "ref" => "0103G050 Vanille",
                    "weight" => "550",
                    "packaging" => "10 x Boîte / Carton",
                    "tc_20" => "1610 Carton",
                    "tc_40" => "3450 Carton"
                ],

            ],
            "Produits pâtissiers" => [
                // ?Chocolats pâtissiers
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Chocolats pâtissiers",
                    "product_name" => "CHOCOLAT DE COUVERTURE NOIR 57% CACAO",
                    "product_description" => "Chocolat de Couverture Noir 57% Cacao",
                    "ref" => "0301P47",
                    "weight" => "1000",
                    "packaging" => "9 x Bloc / Carton",
                    "tc_20" => "2570 Carton",
                    "tc_40" => "5500 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Chocolats pâtissiers",
                    "product_name" => "CHOCOLAT DE COUVERTURE LAIT",
                    "product_description" => "Chocolat de Couverture au Lait",
                    "ref" => "0301P48",
                    "weight" => "1000",
                    "packaging" => "9 x Bloc / Carton",
                    "tc_20" => "2570 Carton",
                    "tc_40" => "5500 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Chocolats pâtissiers",
                    "product_name" => "CHOCOLAT DE COUVERTURE NOIR 73% CACAO",
                    "product_description" => "Chocolat de Couverture Noir 73% Cacao",
                    "ref" => "0301P49",
                    "weight" => "1000",
                    "packaging" => "9 x Bloc / Carton",
                    "tc_20" => "2570 Carton",
                    "tc_40" => "5500 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Chocolats pâtissiers",
                    "product_name" => "ENROBAGE BLANC",
                    "product_description" => "Bloc de Végécao Pâtissier",
                    "ref" => "0303P03",
                    "weight" => "1000",
                    "packaging" => "20 x Bloc / Carton",
                    "tc_20" => "1210 Carton",
                    "tc_40" => "2590 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Chocolats pâtissiers",
                    "product_name" => "ENROBAGE NOIR",
                    "product_description" => "Bloc de Végécao Pâtissier",
                    "ref" => "0303P04",
                    "weight" => "1000",
                    "packaging" => "20 x Bloc / Carton",
                    "tc_20" => "1210 Carton",
                    "tc_40" => "2590 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Chocolats pâtissiers",
                    "product_name" => "ENROBAGE LAIT",
                    "product_description" => "Bloc de Végécao Pâtissier",
                    "ref" => "0303P05",
                    "weight" => "1000",
                    "packaging" => "22 x Bloc / Carton",
                    "tc_20" => "1210 Carton",
                    "tc_40" => "2590 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Chocolats pâtissiers",
                    "product_name" => "CHOCO PASTY",
                    "product_description" => "Chocolat de Couverture Noir 73% Cacao",
                    "ref" => "0304P78",
                    "weight" => "250",
                    "packaging" => "16 x Sachet / Carton",
                    "tc_20" => "2570 Carton",
                    "tc_40" => "5500 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Chocolats pâtissiers",
                    "product_name" => "CHOCO PASTY",
                    "product_description" => "Chocolat de Couverture Noir 73% Cacao",
                    "ref" => "0304P89",
                    "weight" => "1000",
                    "packaging" => "8 x Sachet / Carton",
                    "tc_20" => "1150 Carton",
                    "tc_40" => "2480 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Chocolats pâtissiers",
                    "product_name" => "CHOCO DROPS",
                    "product_description" => "Pastilles au Sucre Chocolaté",
                    "ref" => "0304P97",
                    "weight" => "2000",
                    "packaging" => "6 x Sachet / Carton",
                    "tc_20" => "1000 Carton",
                    "tc_40" => "2150 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Chocolats pâtissiers",
                    "product_name" => "PÉPITES DE CHOCOLAT",
                    "product_description" => "Pépites de Chocolat",
                    "ref" => "0304P090",
                    "weight" => "250",
                    "packaging" => "20 x Sachet / Carton",
                    "tc_20" => "2560 Carton",
                    "tc_40" => "5300 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Chocolats pâtissiers",
                    "product_name" => "PÉPITES DE CHOCOLAT",
                    "product_description" => "Pépites de Chocolat",
                    "ref" => "0304P091",
                    "weight" => "1000",
                    "packaging" => "9 x Sachet / Carton",
                    "tc_20" => "1650 Carton",
                    "tc_40" => "3430 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Chocolats pâtissiers",
                    "product_name" => "CHOCO PASTY NOIR 73% CACAO",
                    "product_description" => "Pastilles au Chocolat Noir 73% Cacao",
                    "ref" => "0304P22",
                    "weight" => "1000",
                    "packaging" => "9 x Boîte / Carton",
                    "tc_20" => "1150 Carton",
                    "tc_40" => "2480 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Chocolats pâtissiers",
                    "product_name" => "CHOCO PASTY LAIT",
                    "product_description" => "Pastilles au Chocolat",
                    "ref" => "0304P25",
                    "weight" => "1000",
                    "packaging" => "9 x Boîte / Carton",
                    "tc_20" => "1150 Carton",
                    "tc_40" => "2480 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Chocolats pâtissiers",
                    "product_name" => "CHOCO PASTY ENROBAGE BLANC",
                    "product_description" => "Pastilles Sucre Chocolaté",
                    "ref" => "0304P37",
                    "weight" => "1000",
                    "packaging" => "12 x Boîte / Carton",
                    "tc_20" => "1150 Carton",
                    "tc_40" => "2480 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Chocolats pâtissiers",
                    "product_name" => "LINGOT NOIR",
                    "product_description" => "Lingot Végécao",
                    "ref" => "0304P01",
                    "weight" => "900",
                    "packaging" => "16 x Bloc / Carton",
                    "tc_20" => "1410 Carton",
                    "tc_40" => "3040 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Chocolats pâtissiers",
                    "product_name" => "MINI LINGOT NOIR",
                    "product_description" => "Lingot Végécao",
                    "ref" => "0304P08",
                    "weight" => "450",
                    "packaging" => "24 x Bloc / Carton",
                    "tc_20" => "1410 Carton",
                    "tc_40" => "3090 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Chocolats pâtissiers",
                    "product_name" => "LINGOT BLANC",
                    "product_description" => "Lingot Végécao",
                    "ref" => "0304P06",
                    "weight" => "900",
                    "packaging" => "16 x Bloc / Carton",
                    "tc_20" => "1410 Carton",
                    "tc_40" => "3040 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Chocolats pâtissiers",
                    "product_name" => "MINI LINGOT BLANC",
                    "product_description" => "Lingot Végécao",
                    "ref" => "0304P09",
                    "weight" => "450",
                    "packaging" => "24 x Bloc / Carton",
                    "tc_20" => "1410 Carton",
                    "tc_40" => "3090 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Chocolats pâtissiers",
                    "product_name" => "LINGOT MÉNAGE NOIR",
                    "product_description" => "Succédané de Chocolat",
                    "ref" => "0201T024",
                    "weight" => "250",
                    "packaging" => "5 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1520 Carton",
                    "tc_40" => "3260 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Chocolats pâtissiers",
                    "product_name" => "LINGOT MÉNAGE BLANC",
                    "product_description" => "Succédané de Chocolat",
                    "ref" => "0201T023",
                    "weight" => "250",
                    "packaging" => "5 Boîte de 10 x Tablette / Carton",
                    "tc_20" => "1520 Carton",
                    "tc_40" => "3260 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Chocolats pâtissiers",
                    "product_name" => "BÂTONNET AU CHOCOLAT",
                    "product_description" => "Bâtonnet au Chocolat",
                    "ref" => "0202R051",
                    "weight" => "600",
                    "packaging" => "24 x Boîte de 160 pièces / Carton",
                    "tc_20" => "1330 Carton",
                    "tc_40" => "2850 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Chocolats pâtissiers",
                    "product_name" => "BATÔNNET PÂTISSIER",
                    "product_description" => "Bâtonnet Pâtissier",
                    "ref" => "0202R08",
                    "weight" => "600",
                    "packaging" => "24 x Boîte de 160 pièces / Carton",
                    "tc_20" => "1800 Carton",
                    "tc_40" => "3870 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Chocolats pâtissiers",
                    "product_name" => "CHOCO PASTY NOIR 73% CACAO",
                    "product_description" => "Pastilles au Chocolat Noir 73% Cacao",
                    "ref" => "0304P020",
                    "weight" => "4000",
                    "packaging" => "1 x Seau / Carton",
                    "tc_20" => "2800 Carton",
                    "tc_40" => "5650 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Chocolats pâtissiers",
                    "product_name" => "CHOCO PASTY AU LAIT",
                    "product_description" => "Pastilles au Chocolat",
                    "ref" => "0304P023",
                    "weight" => "4000",
                    "packaging" => "1 x Seau / Carton",
                    "tc_20" => "2800 Carton",
                    "tc_40" => "5650 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Chocolats pâtissiers",
                    "product_name" => "CHOCO PASTY BLANC",
                    "product_description" => "Pastilles au Chocolat",
                    "ref" => "0304P026",
                    "weight" => "4000",
                    "packaging" => "1 x Seau / Carton",
                    "tc_20" => "2800 Carton",
                    "tc_40" => "5650 Carton"
                ],

                // ?Fourrage & décoration
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fourrage & décoration",
                    "product_name" => "AMANDES ÉFFILÉES",
                    "product_description" => "Produit Pâtissier",
                    "ref" => "0301P21",
                    "weight" => "2000",
                    "packaging" => "1 x Boîte / Carton",
                    "tc_20" => "5600 Carton",
                    "tc_40" => "11600 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fourrage & décoration",
                    "product_name" => "AMANDES HACHÉES",
                    "product_description" => "Produit Pâtissier",
                    "ref" => "0301P22",
                    "weight" => "2000",
                    "packaging" => "1 x Sachet / Carton",
                    "tc_20" => "870 Carton",
                    "tc_40" => "1860 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fourrage & décoration",
                    "product_name" => "AMANDES EN POUDRE",
                    "product_description" => "Produit Pâtissier",
                    "ref" => "0301P23",
                    "weight" => "2000",
                    "packaging" => "1 x Sachet / Carton",
                    "tc_20" => "870 Carton",
                    "tc_40" => "1860 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fourrage & décoration",
                    "product_name" => "VERMICELLE CACAO",
                    "product_description" => "Vermicelle",
                    "ref" => "0601I55",
                    "weight" => "200",
                    "packaging" => "28 x Boîte / Carton",
                    "tc_20" => "2770 Carton",
                    "tc_40" => "5700 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fourrage & décoration",
                    "product_name" => "VERMICELLE CACAO",
                    "product_description" => "Vermicelle",
                    "ref" => "0301P25",
                    "weight" => "1000",
                    "packaging" => "10 x Boîte / Carton",
                    "tc_20" => "1600 Carton",
                    "tc_40" => "3200 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fourrage & décoration",
                    "product_name" => "VERMICELLE COULEURS",
                    "product_description" => "Vermicelle",
                    "ref" => "0601I56",
                    "weight" => "200",
                    "packaging" => "28 x Boîte / Carton",
                    "tc_20" => "2770 Carton",
                    "tc_40" => "5700 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fourrage & décoration",
                    "product_name" => "VERMICELLE COULEURS",
                    "product_description" => "Vermicelle",
                    "ref" => "0301P26",
                    "weight" => "1000",
                    "packaging" => "10 x Boîte / Carton",
                    "tc_20" => "1600 Carton",
                    "tc_40" => "3200 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fourrage & décoration",
                    "product_name" => "VERMICELLE BLEU",
                    "product_description" => "Vermicelle",
                    "ref" => "0301P41",
                    "weight" => "1000",
                    "packaging" => "10 x Boîte / Carton",
                    "tc_20" => "1600 Carton",
                    "tc_40" => "3200 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fourrage & décoration",
                    "product_name" => "VERMICELLE ROUGE",
                    "product_description" => "Vermicelle",
                    "ref" => "0301P44",
                    "weight" => "1000",
                    "packaging" => "10 x Boîte / Carton",
                    "tc_20" => "1600 Carton",
                    "tc_40" => "3200 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fourrage & décoration",
                    "product_name" => "VERMICELLE VERT",
                    "product_description" => "Vermicelle",
                    "ref" => "0301P43",
                    "weight" => "1000",
                    "packaging" => "10 x Boîte / Carton",
                    "tc_20" => "1600 Carton",
                    "tc_40" => "3200 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fourrage & décoration",
                    "product_name" => "VERMICELLE JAUNE",
                    "product_description" => "Vermicelle",
                    "ref" => "0301P42",
                    "weight" => "1000",
                    "packaging" => "10 x Boîte / Carton",
                    "tc_20" => "1600 Carton",
                    "tc_40" => "3200 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fourrage & décoration",
                    "product_name" => "VERMICELLE ROSE",
                    "product_description" => "Vermicelle",
                    "ref" => "0301P40",
                    "weight" => "1000",
                    "packaging" => "10 x Boîte / Carton",
                    "tc_20" => "1600 Carton",
                    "tc_40" => "3200 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fourrage & décoration",
                    "product_name" => "NON PAREILLE",
                    "product_description" => "Vermicelle pour décoration",
                    "ref" => "0301P005",
                    "weight" => "1000",
                    "packaging" => "20 x Seau / Carton",
                    "tc_20" => "1500 Carton",
                    "tc_40" => "3200 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fourrage & décoration",
                    "product_name" => "AMANDES ÉFFILÉES",
                    "product_description" => "Produit Pâtissier",
                    "ref" => "0601I37",
                    "weight" => "100",
                    "packaging" => "24 x Pot / Carton",
                    "tc_20" => "1540 Carton",
                    "tc_40" => "3300 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fourrage & décoration",
                    "product_name" => "AMANDES HACHÉES",
                    "product_description" => "Produit Pâtissier",
                    "ref" => "0601I38",
                    "weight" => "100",
                    "packaging" => "24 x Pot / Carton",
                    "tc_20" => "1540 Carton",
                    "tc_40" => "3300 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fourrage & décoration",
                    "product_name" => "AMANDES EN POUDRE",
                    "product_description" => "Produit Pâtissier",
                    "ref" => "0601I39",
                    "weight" => "100",
                    "packaging" => "24 x Pot / Carton",
                    "tc_20" => "1540 Carton",
                    "tc_40" => "3300 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fourrage & décoration",
                    "product_name" => "PÂTE D'AMANDE",
                    "product_description" => "Produit Pâtissier",
                    "ref" => "0301P16",
                    "weight" => "5000",
                    "packaging" => "1 x Pot / Carton",
                    "tc_20" => "2800 Carton",
                    "tc_40" => "5650 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fourrage & décoration",
                    "product_name" => "PÂTE D'AMANDE",
                    "product_description" => "Produit Pâtissier",
                    "ref" => "0304P52",
                    "weight" => "1000",
                    "packaging" => "12 x Pot / Carton",
                    "tc_20" => "1320 Carton",
                    "tc_40" => "2840 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fourrage & décoration",
                    "product_name" => "PRALINÉ AUX AMANDES",
                    "product_description" => "Produit Pâtissier",
                    "ref" => "0301P15",
                    "weight" => "4800",
                    "packaging" => "1 x Seau / Carton",
                    "tc_20" => "2800 Carton",
                    "tc_40" => "5650 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fourrage & décoration",
                    "product_name" => "PRALINÉ AUX AMANDES",
                    "product_description" => "Produit Pâtissier",
                    "ref" => "0304P53",
                    "weight" => "1000",
                    "packaging" => "12 x Pot / Carton",
                    "tc_20" => "1320 Carton",
                    "tc_40" => "2840 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fourrage & décoration",
                    "product_name" => "FONDANT BLANC",
                    "product_description" => "Produit Pâtissier",
                    "ref" => "0301P13",
                    "weight" => "7000",
                    "packaging" => "1 x Seau / Carton",
                    "tc_20" => "2800 Carton",
                    "tc_40" => "5650 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fourrage & décoration",
                    "product_name" => "FONDANT BLANC",
                    "product_description" => "Produit Pâtissier",
                    "ref" => "0304P51",
                    "weight" => "1000",
                    "packaging" => "12 x Pot / Carton",
                    "tc_20" => "1320 Carton",
                    "tc_40" => "2840 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fourrage & décoration",
                    "product_name" => "NAPPAGE PÂTISSIER",
                    "product_description" => "Produit Pâtissier",
                    "ref" => "0301P18",
                    "weight" => "4300",
                    "packaging" => "1 x Seau / Carton",
                    "tc_20" => "2800 Carton",
                    "tc_40" => "5650 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fourrage & décoration",
                    "product_name" => "NAPPAGE PÂTISSIER",
                    "product_description" => "Produit Pâtissier",
                    "ref" => "0304P50",
                    "weight" => "1000",
                    "packaging" => "12 x Pot / Carton",
                    "tc_20" => "1320 Carton",
                    "tc_40" => "2840 Carton"
                ],

                // ?Fruits confits
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fruits confits",
                    "product_name" => "MACÉDOINE DE FRUITS",
                    "product_description" => "Fruits Confits",
                    "ref" => "0301P079",
                    "weight" => "2000",
                    "packaging" => "1 x Seau / Carton",
                    "tc_20" => "3900 Carton",
                    "tc_40" => "7400 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fruits confits",
                    "product_name" => "MACÉDOINE DE FRUITS",
                    "product_description" => "Fruits Confits",
                    "ref" => "0301P010",
                    "weight" => "5000",
                    "packaging" => "1 x Seau / Carton",
                    "tc_20" => "2800 Carton",
                    "tc_40" => "5650 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fruits confits",
                    "product_name" => "BIGARREAUX ROUGES",
                    "product_description" => "Cerises Confites",
                    "ref" => "0301P060",
                    "weight" => "2000",
                    "packaging" => "1 x Seau / Carton",
                    "tc_20" => "3900 Carton",
                    "tc_40" => "7400 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fruits confits",
                    "product_name" => "BIGARREAUX ROUGES",
                    "product_description" => "Cerises Confites",
                    "ref" => "0301P008",
                    "weight" => "5000",
                    "packaging" => "1 x Seau / Carton",
                    "tc_20" => "2800 Carton",
                    "tc_40" => "5650 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fruits confits",
                    "product_name" => "BIGARREAUX VERTS",
                    "product_description" => "Cerises Confites",
                    "ref" => "0301P059",
                    "weight" => "2000",
                    "packaging" => "1 x Seau / Carton",
                    "tc_20" => "3900 Carton",
                    "tc_40" => "7400 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fruits confits",
                    "product_name" => "BIGARREAUX VERTS",
                    "product_description" => "Cerises Confites",
                    "ref" => "0301P007",
                    "weight" => "5000",
                    "packaging" => "1 x Seau / Carton",
                    "tc_20" => "2800 Carton",
                    "tc_40" => "5650 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fruits confits",
                    "product_name" => "CERISES CONFITES ROUGES",
                    "product_description" => "Cerises Confites",
                    "ref" => "1001P004",
                    "weight" => "5000",
                    "packaging" => "1 x Seau / Carton",
                    "tc_20" => "3100 Carton",
                    "tc_40" => "1860 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fruits confits",
                    "product_name" => "CERISES CONFITES VERTES",
                    "product_description" => "Cerises Confites",
                    "ref" => "1001P005",
                    "weight" => "5000",
                    "packaging" => "1 x Seau / Carton",
                    "tc_20" => "3100 Carton",
                    "tc_40" => "1860 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fruits confits",
                    "product_name" => "ÉCORCES D'ORANGE CUBES",
                    "product_description" => "Fruits Confits",
                    "ref" => "0301P012",
                    "weight" => "5000",
                    "packaging" => "1 x Seau / Carton",
                    "tc_20" => "3100 Carton",
                    "tc_40" => "1860 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fruits confits",
                    "product_name" => "ÉCORCES D'ORANGE TRANCHES",
                    "product_description" => "Fruits Confits",
                    "ref" => "0301P011",
                    "weight" => "4000",
                    "packaging" => "1 x Seau / Carton",
                    "tc_20" => "3100 Carton",
                    "tc_40" => "1860 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fruits confits",
                    "product_name" => "MACÉDOINE DE FRUITS",
                    "product_description" => "Fruits Confits",
                    "ref" => "0601I030",
                    "weight" => "120",
                    "packaging" => "36 x Pot / Carton",
                    "tc_20" => "2750 Carton",
                    "tc_40" => "5900 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fruits confits",
                    "product_name" => "BIGARREAUX ROUGES",
                    "product_description" => "Cerises Confites",
                    "ref" => "0601I028",
                    "weight" => "120",
                    "packaging" => "36 x Pot / Carton",
                    "tc_20" => "2750 Carton",
                    "tc_40" => "5900 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fruits confits",
                    "product_name" => "BIGARREAUX VERTS",
                    "product_description" => "Cerises Confites",
                    "ref" => "0601I029",
                    "weight" => "120",
                    "packaging" => "36 x Pot / Carton",
                    "tc_20" => "2750 Carton",
                    "tc_40" => "5900 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fruits confits",
                    "product_name" => "CERISES CONFITES ROUGES Maryza",
                    "product_description" => "Cerises Confites",
                    "ref" => "1002M002",
                    "weight" => "120",
                    "packaging" => "36 x Pot / Carton",
                    "tc_20" => "2750 Carton",
                    "tc_40" => "5900 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Fruits confits",
                    "product_name" => "CERISES CONFITES VERTES Maryza",
                    "product_description" => "Cerises Confites",
                    "ref" => "1002M003",
                    "weight" => "120",
                    "packaging" => "36 x Pot / Carton",
                    "tc_20" => "2750 Carton",
                    "tc_40" => "5900 Carton"
                ],

                // ?Poudre de cacao sucré
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Poudre de cacao sucrée",
                    "product_name" => "CHOCODÉJ",
                    "product_description" => "Poudre de Cacao Sucré",
                    "ref" => "0202R02",
                    "weight" => "250",
                    "packaging" => "24 x Boîte / Carton",
                    "tc_20" => "2040 Carton",
                    "tc_40" => "4370 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Poudre de cacao sucré",
                    "product_name" => "CHOCODÉJ",
                    "product_description" => "Poudre de Cacao Sucré",
                    "ref" => "0202R03",
                    "weight" => "500",
                    "packaging" => "16 x Boîte / Carton",
                    "tc_20" => "1570 Carton",
                    "tc_40" => "3370 Carton"
                ],
                [
                    "parent_category_name" => "Produits pâtissiers",
                    "category_name" => "Poudre de cacao sucré",
                    "product_name" => "CHOCODÉJ",
                    "product_description" => "Poudre de Cacao Sucré",
                    "ref" => "0202R01",
                    "weight" => "100",
                    "packaging" => "60 x Boîte / Carton",
                    "tc_20" => "1590 Carton",
                    "tc_40" => "3400 Carton"
                ],

            ]
        ];


        // create Macao mark

        $macaoBrandId = Brand::create(["name" => "Macao"])->id;

        // create product types
        $productTypesData = [
            "Boîte plastique de 100 pièces",
            "Boîte carton de 100 pièces",
            "Sachet de 12 pièces",
            "Sachet de 50 pièces",
            "Sachet",
            "Boîte plastique de 200 pièces",
            "Boîte display de 100 pièces",
            "Boîte display de 200 pièces",
            "Sachet de 0 pièces",
            "Boîte plastique",
            "Pot de 0 pièces",
            "Boîte display",
            "Sachet de 500 pièces",
            "Boîte de 300 pièces",
            "Boîte",
            "Boîte de 130 pièces",
            "Boîte de 140 pièces",
            "Boîte de 380 pièces",
            "Pot",
            "Bocal plastique de 200 pièces",
            "Sachet de 100 pièces",
            "Sachet de 170 pièces",
            "Sachet de 165 pièces",
            "Sachet de 200 pièces",
            "Sachet de 160 pièces",
            "Boîte de 200 pièces",
            "Tablette",
            "Seau",
            "Verre",
            "Boîte de 60 pièces",
            "Boîte de 100 pièces",
            "Boîte plastique de 40 pièces",
            "Boîte plastique de 80 pièces",
            "Boîte display de 60 pièces",
            "Sachet de 3 pièces",
            "Boîte display de 75 pièces",
            "Boîte de 16 pièces",
            "Boîte de 64 pièces",
            "Boîte carton",
            "Coffret carton",
            "Colis cadeau",
            "Boîte livre",
            "Boîte de 36 pièces",
            "Boîte de 42 pièces",
            "Boîte display de 40 pièces",
            "Bloc",
            "Boîte de 160 pièces"
        ];

        foreach ($productTypesData as $productType) {
            ProductType::create(["name" => $productType]);
        }

        // create parent categories
        foreach (array_keys($data) as $name) {
            $category = Category::create(['name' => $name]);
            $this->parent_categories[] = ['id' => $category->id, 'name' => $category->name];
        }


        // create product categories
        foreach ($data as $parentCategorylabel => $parentCategorycontent) {
            $foundParentCategroy = array_filter($this->parent_categories, function ($parentCat) use ($parentCategorylabel) {
                return $parentCat['name'] == $parentCategorylabel;
            });
            $parentcategoryId =  \array_values($foundParentCategroy)[0]['id'];

            foreach ($parentCategorycontent as $product) {
                // the category already exists
                if (!count(Category::where('name', $product['category_name'])->get()) == 0) {
                    continue;
                } else {
                    $createdCategory = Category::create(['name' => $product['category_name']]);

                    $createdCategory->parentCategories()->attach([$parentcategoryId]);
                }
            }
            \dump($parentCategorylabel . ' sub categories created');
        }


        // create products

        foreach ($data as $parentCategorylabel => $parentCategorycontent) {

            foreach ($parentCategorycontent as $product) {
                $foundCategoryId  =  Category::where('name', $product['category_name'])->get()[0]['id'];
                $foundProductTypeId = ProductType::where('name', trim(preg_match('/x (.*?) \//', $product['packaging'], $matches) ? $matches[1] : null))->get()[0]['id'];

                $createdproduct = Product::create([
                    'ref' => $product['ref'],
                    'name' => $product['product_name'],
                    'description' => $product['product_description'],
                    'price' => null,
                    'weight' => $product['weight'],
                    'packaging' => $product['packaging'],
                    'tc_20' => $product['tc_20'],
                    'tc_40' => $product['tc_40'],
                    'brand_id' => $macaoBrandId,
                    'product_type_id' => $foundProductTypeId
                ]);

                $createdproduct->categories()->attach([$foundCategoryId]);
            }

            \dump($parentCategorylabel . ' category products Created');
        }
    }




}
