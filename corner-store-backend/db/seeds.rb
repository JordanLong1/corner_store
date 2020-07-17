# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Cart.create([{item_count: 0, total_price: 0.0}])

Product.create([
    {title: "Pink Flamingo Blast", description: "5.5 Inch seam with elastic waistband, Stretch mesh linen for comfort with back pocket zipper", price: 69.99, category: "Bottoms", product_image: "https://productsforjsproject.s3-us-west-1.amazonaws.com/pink_flamingo_blast.jpg"},
    {title: "Green Gator Takeover", description: "5.5 Inch Stretch swim trunks, Made out of 4-way stretch Polyestor/Spandex Blend. Elastic waistband for fit, Stretch mesh liner for comfort, and a back pocket zipper for secure storage.", price: 49.99, category: "Bottoms", product_image: "https://productsforjsproject.s3-us-west-1.amazonaws.com/green_gators.jpg"},
    {title: "The Doggie Paddles", description: "5.5 inch Stretch seam. Made out of our 4-way stretch Polyester/Spandex Blend. They are impossibly stretchy.", price: 74.99, category: "Bottoms", product_image: "https://productsforjsproject.s3-us-west-1.amazonaws.com/real_doggy_paddles.jpg"},
    {title: "Shark Attack", description: "5.5 Inch seam made out of our 4-way stretch Polyester/Spandex Blend. They are impossibly stretchy.", price: 49.99, category: "Bottoms", product_image: "https://productsforjsproject.s3-us-west-1.amazonaws.com/Screen+Shot+2020-06-28+at+8.21.18+PM.png"},
    {title: "Neon Glow 3000", description: "5.5 Inch seam made out of our 4-way stretch Polyester/Spandex Blend. They are impossibly stretchy.", price: 29.99, category: "Bottoms", product_image: "https://productsforjsproject.s3-us-west-1.amazonaws.com/neon_lights.jpg"},
    {title: "Mens Geo Sails", description: "Long sleeve pocket tee. Fabrics are 100% Cotton. Classic fit with graphic on chest pocket and back.", price: 24.99, category: "Tops", product_image: "https://productsforjsproject.s3-us-west-1.amazonaws.com/boat_sales.png"},
    {title: "Mens Bus & Board", description: "Long sleeve pocket tee. Fabrics are 100% Cotton. Classic fit with graphic on chest pocket and back.", price: 29.99, category: "Tops", product_image: "https://productsforjsproject.s3-us-west-1.amazonaws.com/hippy_van.png"},
    {title: "Mens Batter-Up!", description: "Short sleeve pocket tee. Fabrics are 100% Cotton. Classic fit with graphic on chest pocket and back.", price: 19.99, category: "Tops", product_image: "https://productsforjsproject.s3-us-west-1.amazonaws.com/batter_up.png"},
    {title: "Mens Lax Brah", description: "Short sleeve pocket tee. Fabrics are 100% Cotton. Classic fit with graphic on chest pocket and back.", price: 19.99, category: "Tops", product_image: "https://productsforjsproject.s3-us-west-1.amazonaws.com/lax_bro.png"},
    {title: "Mens Tequila Sunrise", description: "Long sleeve pocket tee. Fabrics are 100% Cotton. Classic fit with graphic on chest pocket and back.", price: 39.99, category: "Tops", product_image: "https://productsforjsproject.s3-us-west-1.amazonaws.com/tequila_sunrise.jpg"},
    {title: "Linen V-Neck Tee", description: "Your basic tee, upgraded. Luxe and lightweight, our linen is the perfect weight for warm-weather layering.", price: 49.99, category: "Womens", product_image: "https://productsforjsproject.s3-us-west-1.amazonaws.com/2K001432_5305_OF_F.jpg"},
    {title: "Striped V-Neck Maxi Dress", description: "Getting ready just got so much easier with this chic v-neck maxi dress. Made with a soft Pima cotton/stretch blend fabric and flattering waist tie for either the front or the back, this versatile dress is perfect for work and weekend getaways.", price: 140.00, category: "Womens", product_image: "https://productsforjsproject.s3-us-west-1.amazonaws.com/2Q010358_3819_OF_ED.jpg"},
    {title: "Stripe Peplum Top", description: "Sleeveless peplum top, Yarn dye seersucker stripe, Keyhole at back neck, Body length: 25 inches from the top of the shoulder to the bottom hem.", price: 50.00, category: "Womens", product_image: "https://productsforjsproject.s3-us-west-1.amazonaws.com/2W001224_3764_LD_F.jpg"},
    {title: "Dip Dye Vintage Tee", description: "Short-sleeve vintage whale pocket tee. Classic t-shirt silhouette. Dip dye with Vintage whale graphic on front chest pocket and center back.", price: 39.99, category: "Womens", product_image: "https://productsforjsproject.s3-us-west-1.amazonaws.com/2V001342_100_LD_B.jpg"},
    {title: "Floral FLamingo Flip-FLops", description: "Printed footbed, Solid strap with gold whale detailing, Perfect for a day by the water", price: 29.99, category: "Womens", product_image: "https://productsforjsproject.s3-us-west-1.amazonaws.com/2Z001064_3790_LD_F.jpg"}


])



# If they are in the folder, you can access the file by using /filename.jpg
# If you put them in/images then just put a /images/filename.jpg
# {title: "Pink Flamingo Blast", description: "5.5 Inch seam with elastic waistband, Stretch mesh linen for comfort with back pocket zipper", price: 69.99, category: "Bottoms", product_image: "https://cdn.shopify.com/s/files/1/0077/0432/products/Cucamongas--_Stretch_-Zp_7_6659_web_a33f20b7-0313-4c54-a19a-02330baa5780_1024x1024.jpg?v=1587483244"},


