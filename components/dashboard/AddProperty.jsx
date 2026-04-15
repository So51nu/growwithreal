// // "use client";
// // import React from "react";
// // import Image from "next/image";
// // import DropdownSelect from "../common/DropdownSelect";
// // export default function AddProperty() {
// //   return (
// //     <div className="main-content w-100">
// //       <div className="main-content-inner">
// //         <div className="button-show-hide show-mb">
// //           <span className="body-1">Show Dashboard</span>
// //         </div>
// //         <div className="widget-box-2 mb-20">
// //           <h3 className="title">Upload Media</h3>
// //           <div className="box-uploadfile text-center">
// //             <div className="uploadfile">
// //               <a
// //                 href="#"
// //                 className=" tf-btn bg-color-primary pd-10 btn-upload mx-auto"
// //               >
// //                 <svg
// //                   width={21}
// //                   height={20}
// //                   viewBox="0 0 21 20"
// //                   fill="none"
// //                   xmlns="http://www.w3.org/2000/svg"
// //                 >
// //                   <path
// //                     d="M13.625 14.375V17.1875C13.625 17.705 13.205 18.125 12.6875 18.125H4.5625C4.31386 18.125 4.0754 18.0262 3.89959 17.8504C3.72377 17.6746 3.625 17.4361 3.625 17.1875V6.5625C3.625 6.045 4.045 5.625 4.5625 5.625H6.125C6.54381 5.62472 6.96192 5.65928 7.375 5.72834M13.625 14.375H16.4375C16.955 14.375 17.375 13.955 17.375 13.4375V9.375C17.375 5.65834 14.6725 2.57417 11.125 1.97834C10.7119 1.90928 10.2938 1.87472 9.875 1.875H8.3125C7.795 1.875 7.375 2.295 7.375 2.8125V5.72834M13.625 14.375H8.3125C8.06386 14.375 7.8254 14.2762 7.64959 14.1004C7.47377 13.9246 7.375 13.6861 7.375 13.4375V5.72834M17.375 11.25V9.6875C17.375 8.94158 17.0787 8.22621 16.5512 7.69876C16.0238 7.17132 15.3084 6.875 14.5625 6.875H13.3125C13.0639 6.875 12.8254 6.77623 12.6496 6.60041C12.4738 6.4246 12.375 6.18614 12.375 5.9375V4.6875C12.375 4.31816 12.3023 3.95243 12.1609 3.6112C12.0196 3.26998 11.8124 2.95993 11.5512 2.69876C11.2901 2.4376 10.98 2.23043 10.6388 2.08909C10.2976 1.94775 9.93184 1.875 9.5625 1.875H8.625"
// //                     stroke="white"
// //                     strokeWidth="1.5"
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                   />
// //                 </svg>
// //                 Select photos
// //                 <input type="file" className="ip-file" />
// //               </a>
// //               <p className="file-name fw-5">
// //                 or drag photos here <br />
// //                 <span>(Up to 10 photos)</span>
// //               </p>
// //             </div>
// //           </div>
// //           <div className="box-img-upload">
// //             <div className="item-upload file-delete">
// //               <Image
// //                 alt="img"
// //                 width={615}
// //                 height={405}
// //                 src="/images/home/house-db-1.jpg"
// //               />
// //               <span className="icon icon-trashcan1 remove-file" />
// //             </div>
// //             <div className="item-upload file-delete">
// //               <Image
// //                 alt="img"
// //                 width={615}
// //                 height={405}
// //                 src="/images/home/house-db-2.jpg"
// //               />
// //               <span className="icon icon-trashcan1" />
// //             </div>
// //             <div className="item-upload file-delete">
// //               <Image
// //                 alt="img"
// //                 width={615}
// //                 height={405}
// //                 src="/images/home/house-db-3.jpg"
// //               />
// //               <span className="icon icon-trashcan1 remove-file" />
// //             </div>
// //             <div className="item-upload file-delete">
// //               <Image
// //                 alt="img"
// //                 width={615}
// //                 height={405}
// //                 src="/images/home/house-db-4.jpg"
// //               />
// //               <span className="icon icon-trashcan1 remove-file" />
// //             </div>
// //             <div className="item-upload file-delete">
// //               <Image
// //                 alt="img"
// //                 width={615}
// //                 height={405}
// //                 src="/images/home/house-db-5.jpg"
// //               />
// //               <span className="icon icon-trashcan1 remove-file" />
// //             </div>
// //           </div>
// //         </div>
// //         <div className="widget-box-2 mb-20">
// //           <h5 className="title">Information</h5>
// //           <form
// //             className="box-info-property"
// //             onSubmit={(e) => e.preventDefault()}
// //           >
// //             <fieldset className="box box-fieldset">
// //               <label htmlFor="title">
// //                 Title:<span>*</span>
// //               </label>
// //               <input
// //                 type="text"
// //                 className="form-control"
// //                 placeholder="Choose"
// //               />
// //             </fieldset>
// //             <fieldset className="box box-fieldset">
// //               <label htmlFor="desc">Description:</label>
// //               <textarea
// //                 className="textarea"
// //                 placeholder="Your Decscription"
// //                 defaultValue={""}
// //               />
// //             </fieldset>
// //             <div className="box grid-layout-3 gap-30">
// //               <fieldset className="box-fieldset">
// //                 <label htmlFor="address">
// //                   Full Address:<span>*</span>
// //                 </label>
// //                 <input
// //                   type="text"
// //                   className="form-control"
// //                   placeholder="Enter property full address"
// //                 />
// //               </fieldset>
// //               <fieldset className="box-fieldset">
// //                 <label htmlFor="zip">
// //                   Zip Code:<span>*</span>
// //                 </label>
// //                 <input
// //                   type="text"
// //                   className="form-control"
// //                   placeholder="Enter property zip code"
// //                 />
// //               </fieldset>
// //               <fieldset className="box-fieldset">
// //                 <label htmlFor="country">
// //                   Country:<span>*</span>
// //                 </label>

// //                 <DropdownSelect
// //                   options={["United States", "United Kingdom", "Russia"]}
// //                   addtionalParentClass=""
// //                 />
// //               </fieldset>
// //             </div>
// //             <div className="box grid-layout-2 gap-30">
// //               <fieldset className="box-fieldset">
// //                 <label htmlFor="state">
// //                   Province/State:<span>*</span>
// //                 </label>

// //                 <DropdownSelect
// //                   options={["None", "Texas", "New York"]}
// //                   addtionalParentClass=""
// //                 />
// //               </fieldset>
// //               <fieldset className="box-fieldset">
// //                 <label htmlFor="neighborhood">
// //                   Neighborhood:<span>*</span>
// //                 </label>

// //                 <DropdownSelect
// //                   options={["None", "Little Italy", "Bedford Park"]}
// //                   addtionalParentClass=""
// //                 />
// //               </fieldset>
// //             </div>
// //             <div className="box box-fieldset">
// //               <label htmlFor="location">
// //                 Location:<span>*</span>
// //               </label>
// //               <div className="box-ip">
// //                 <input
// //                   type="text"
// //                   className="form-control"
// //                   defaultValue="None"
// //                 />
// //                 <a href="#" className="btn-location">
// //                   <i className="icon icon-location" />
// //                 </a>
// //               </div>
// //               <iframe
// //                 className="map"
// //                 src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d135905.11693909427!2d-73.95165795400088!3d41.17584829642291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1727094281524!5m2!1sen!2s"
// //                 width="100%"
// //                 height={456}
// //                 style={{ border: 0 }}
// //                 allowFullScreen=""
// //                 loading="lazy"
// //                 referrerPolicy="no-referrer-when-downgrade"
// //               />
// //             </div>
// //           </form>
// //         </div>
// //         <div className="widget-box-2 mb-20">
// //           <h3 className="title">Price</h3>
// //           <div className="box-price-property">
// //             <form
// //               className="box grid-2 gap-30"
// //               onSubmit={(e) => e.preventDefault()}
// //             >
// //               <fieldset className="box-fieldset mb-30">
// //                 <label htmlFor="price">
// //                   Price:<span>*</span>
// //                 </label>
// //                 <input
// //                   type="text"
// //                   className="form-control"
// //                   placeholder="Example value: 12345.67"
// //                 />
// //               </fieldset>
// //               <fieldset className="box-fieldset mb-30">
// //                 <label htmlFor="neighborhood">
// //                   Unit Price:<span>*</span>
// //                 </label>

// //                 <DropdownSelect
// //                   options={["None", "1000", "2000"]}
// //                   addtionalParentClass=""
// //                 />
// //               </fieldset>
// //               <div className="grid-layout-2 gap-30">
// //                 <fieldset className="box-fieldset">
// //                   <label htmlFor="price">
// //                     Before Price Label:<span>*</span>
// //                   </label>
// //                   <input type="text" className="form-control" />
// //                 </fieldset>
// //                 <fieldset className="box-fieldset">
// //                   <label htmlFor="price">
// //                     After Price Label:<span>*</span>
// //                   </label>
// //                   <input type="text" className="form-control" />
// //                 </fieldset>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //         <div className="widget-box-2 mb-20">
// //           <h3 className="title">Addtional Infomation</h3>
// //           <form onSubmit={(e) => e.preventDefault()}>
// //             <div className="box grid-layout-3 gap-30">
// //               <fieldset className="box-fieldset">
// //                 <label htmlFor="type">
// //                   Property Type:<span>*</span>
// //                 </label>

// //                 <DropdownSelect
// //                   options={["Apartment", "Villa", "Studio", "Office"]}
// //                   addtionalParentClass=""
// //                 />
// //               </fieldset>
// //               <fieldset className="box-fieldset">
// //                 <label htmlFor="status">
// //                   Property Status:<span>*</span>
// //                 </label>

// //                 <DropdownSelect
// //                   options={["Choose", "For Rent", "For Sale"]}
// //                   addtionalParentClass=""
// //                 />
// //               </fieldset>
// //               <fieldset className="box-fieldset">
// //                 <label htmlFor="label">
// //                   Property Label:<span>*</span>
// //                 </label>

// //                 <DropdownSelect
// //                   options={["Choose", "New Listing", "Open House"]}
// //                   addtionalParentClass=""
// //                 />
// //               </fieldset>
// //             </div>
// //             <div className="box grid-layout-3 gap-30">
// //               <fieldset className="box-fieldset">
// //                 <label htmlFor="size">
// //                   Size (SqFt):<span>*</span>
// //                 </label>
// //                 <input type="text" className="form-control" />
// //               </fieldset>
// //               <fieldset className="box-fieldset">
// //                 <label htmlFor="land">
// //                   Land Area (SqFt):<span>*</span>
// //                 </label>
// //                 <input type="text" className="form-control" />
// //               </fieldset>
// //               <fieldset className="box-fieldset">
// //                 <label htmlFor="id">
// //                   Property ID:<span>*</span>
// //                 </label>
// //                 <input type="text" className="form-control" />
// //               </fieldset>
// //             </div>
// //             <div className="box grid-layout-3 gap-30">
// //               <fieldset className="box-fieldset">
// //                 <label htmlFor="rom">
// //                   Rooms:<span>*</span>
// //                 </label>
// //                 <input type="text" className="form-control" />
// //               </fieldset>
// //               <fieldset className="box-fieldset">
// //                 <label htmlFor="bedrooms">
// //                   Bedrooms:<span>*</span>
// //                 </label>
// //                 <input type="text" className="form-control" />
// //               </fieldset>
// //               <fieldset className="box-fieldset">
// //                 <label htmlFor="bathrooms">
// //                   Bathrooms:<span>*</span>
// //                 </label>
// //                 <input type="text" className="form-control" />
// //               </fieldset>
// //             </div>
// //             <div className="box grid-layout-3 gap-30">
// //               <fieldset className="box-fieldset">
// //                 <label htmlFor="garages">
// //                   Garages:<span>*</span>
// //                 </label>
// //                 <input type="text" className="form-control" />
// //               </fieldset>
// //               <fieldset className="box-fieldset">
// //                 <label htmlFor="garages-size">
// //                   Garages Size (SqFt):<span>*</span>
// //                 </label>
// //                 <input type="text" className="form-control" />
// //               </fieldset>
// //               <fieldset className="box-fieldset">
// //                 <label htmlFor="year">
// //                   Year Built:<span>*</span>
// //                 </label>
// //                 <input type="text" className="form-control" />
// //               </fieldset>
// //             </div>
// //           </form>
// //         </div>
// //         <div className="widget-box-2 mb-20">
// //           <h5 className="title">
// //             Amenities<span>*</span>
// //           </h5>
// //           <div className="box-amenities-property">
// //             <div className="box-amenities">
// //               <div className="title-amenities fw-6 text-color-heading text-1">
// //                 Home safety:
// //               </div>
// //               <div className="list-amenities">
// //                 <fieldset className="checkbox-item  style-1  ">
// //                   <label>
// //                     <span className="text-4">Smoke alarm</span>
// //                     <input type="checkbox" />
// //                     <span className="btn-checkbox" />
// //                   </label>
// //                 </fieldset>
// //                 <fieldset className="checkbox-item style-1  ">
// //                   <label>
// //                     <span className="text-4">Self check-in with lockbox</span>
// //                     <input type="checkbox" />
// //                     <span className="btn-checkbox" />
// //                   </label>
// //                 </fieldset>
// //                 <fieldset className="checkbox-item style-1  ">
// //                   <label>
// //                     <span className="text-4">Carbon monoxide alarm</span>
// //                     <input type="checkbox" />
// //                     <span className="btn-checkbox" />
// //                   </label>
// //                 </fieldset>
// //                 <fieldset className="checkbox-item style-1  ">
// //                   <label>
// //                     <span className="text-4">Security cameras</span>
// //                     <input type="checkbox" />
// //                     <span className="btn-checkbox" />
// //                   </label>
// //                 </fieldset>
// //               </div>
// //             </div>
// //             <div className="box-amenities">
// //               <div className="title-amenities fw-6 text-color-heading text-1">
// //                 Bedroom
// //               </div>
// //               <div className="list-amenities">
// //                 <fieldset className="checkbox-item style-1  ">
// //                   <label>
// //                     <span className="text-4">Hangers</span>
// //                     <input type="checkbox" />
// //                     <span className="btn-checkbox" />
// //                   </label>
// //                 </fieldset>
// //                 <fieldset className="checkbox-item style-1  ">
// //                   <label>
// //                     <span className="text-4">Extra pillows &amp; blankets</span>
// //                     <input type="checkbox" />
// //                     <span className="btn-checkbox" />
// //                   </label>
// //                 </fieldset>
// //                 <fieldset className="checkbox-item style-1  ">
// //                   <label>
// //                     <span className="text-4">Bed linens</span>
// //                     <input type="checkbox" />
// //                     <span className="btn-checkbox" />
// //                   </label>
// //                 </fieldset>
// //                 <fieldset className="checkbox-item style-1  ">
// //                   <label>
// //                     <span className="text-4">TV with standard cable</span>
// //                     <input type="checkbox" />
// //                     <span className="btn-checkbox" />
// //                   </label>
// //                 </fieldset>
// //               </div>
// //             </div>
// //             <div className="box-amenities">
// //               <div className="title-amenities fw-6 text-color-heading text-1">
// //                 Kitchen:
// //               </div>
// //               <div className="list-amenities">
// //                 <fieldset className="checkbox-item style-1  ">
// //                   <label>
// //                     <span className="text-4">Refrigerator</span>
// //                     <input type="checkbox" />
// //                     <span className="btn-checkbox" />
// //                   </label>
// //                 </fieldset>
// //                 <fieldset className="checkbox-item style-1  ">
// //                   <label>
// //                     <span className="text-4">Dishwasher</span>
// //                     <input type="checkbox" />
// //                     <span className="btn-checkbox" />
// //                   </label>
// //                 </fieldset>
// //                 <fieldset className="checkbox-item style-1  ">
// //                   <label>
// //                     <span className="text-4">Microwave</span>
// //                     <input type="checkbox" />
// //                     <span className="btn-checkbox" />
// //                   </label>
// //                 </fieldset>
// //                 <fieldset className="checkbox-item style-1  ">
// //                   <label>
// //                     <span className="text-4">Coffee maker</span>
// //                     <input type="checkbox" />
// //                     <span className="btn-checkbox" />
// //                   </label>
// //                 </fieldset>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="widget-box-2 mb-20">
// //           <h3 className="title">Virtual Tour 360</h3>
// //           <div className="box-radio-check">
// //             <div className="text-btn mb-16">Virtual Tour Type:</div>
// //             <form onSubmit={(e) => e.preventDefault()}>
// //               <fieldset className="radio-item   ">
// //                 <label>
// //                   <span className="text-1">Embedded code</span>
// //                   <input type="radio" name="radio" id="radio1" />
// //                   <span className="btn-radio" />
// //                 </label>
// //               </fieldset>
// //               <fieldset className="radio-item  style-1  ">
// //                 <label>
// //                   <span className="text-1">Upload image</span>
// //                   <input type="radio" name="radio" id="radio2" />
// //                   <span className="btn-radio" />
// //                 </label>
// //               </fieldset>
// //               <fieldset className="box-fieldset">
// //                 <label htmlFor="embedded">Embedded Code Virtual 360</label>
// //                 <textarea className="textarea" defaultValue={""} />
// //               </fieldset>
// //             </form>
// //           </div>
// //         </div>
// //         <div className="widget-box-2 mb-20">
// //           <h3 className="title">Videos</h3>
// //           <form onSubmit={(e) => e.preventDefault()}>
// //             <fieldset className="box-fieldset">
// //               <label htmlFor="video" className="text-btn">
// //                 Video URL:
// //               </label>
// //               <input
// //                 type="text"
// //                 className="form-control"
// //                 placeholder="Youtube, vimeo url"
// //               />
// //             </fieldset>
// //           </form>
// //         </div>
// //         <div className="widget-box-2 mb-20">
// //           <h3 className="title">Floorsededed</h3>
// //           <div className="box-radio-check mb-16">
// //             <div className="text-1 mb-12">Enable Floor Plan:</div>
// //             <fieldset className="radio-item mb-8">
// //               <label>
// //                 <span className="text-1">Enable</span>
// //                 <input type="radio" name="radio" id=" floor-plan-1" />
// //                 <span className="btn-radio" />
// //               </label>
// //             </fieldset>
// //             <fieldset className="radio-item  style-1  ">
// //               <label>
// //                 <span className="text-1">Disable</span>
// //                 <input type="radio" name="radio" id="  floor-plan-2 " />
// //                 <span className="btn-radio" />
// //               </label>
// //             </fieldset>
// //           </div>
// //           <div className="box-floor-property file-delete">
// //             <div className="top d-flex justify-content-between align-items-center">
// //               <h6>Floor 1:</h6>
// //               <a href="#" className="remove-file">
// //                 <span className="icon icon-close" />
// //               </a>
// //             </div>
// //             <form onSubmit={(e) => e.preventDefault()}>
// //               <fieldset className="box box-fieldset">
// //                 <label htmlFor="name">Floor Name:</label>
// //                 <input type="text" className="form-control " />
// //               </fieldset>
// //               <div className="grid-layout-2 box gap-30">
// //                 <fieldset className="box-fieldset">
// //                   <label htmlFor="floor-price">
// //                     Floor Price (Only Digits):
// //                   </label>
// //                   <input type="text" className="form-control " />
// //                 </fieldset>
// //                 <fieldset className="box-fieldset">
// //                   <label htmlFor="price-postfix">Price Postfix:</label>
// //                   <input type="text" className="form-control " />
// //                 </fieldset>
// //               </div>
// //               <div className="grid-layout-2 box gap-30">
// //                 <fieldset className="box-fieldset">
// //                   <label htmlFor="floor-size">Floor Size (Only Digits):</label>
// //                   <input type="text" className="form-control " />
// //                 </fieldset>
// //                 <fieldset className="box-fieldset">
// //                   <label htmlFor="size-postfix">Size Postfix:</label>
// //                   <input type="text" className="form-control " />
// //                 </fieldset>
// //               </div>
// //               <div className="grid-layout-2 box gap-30">
// //                 <fieldset className="box-fieldset">
// //                   <label htmlFor="bedrooms">Bedrooms:</label>
// //                   <input type="text" className="form-control " />
// //                 </fieldset>
// //                 <fieldset className="box-fieldset">
// //                   <label htmlFor="bathrooms">Bathrooms:</label>
// //                   <input type="text" className="form-control " />
// //                 </fieldset>
// //               </div>
// //               <div className="grid-layout-2 box gap-30">
// //                 <fieldset className="box-fieldset">
// //                   <label htmlFor="bedrooms">Floor Image:</label>
// //                   <div className="box-floor-img uploadfile">
// //                     <a
// //                       href="#"
// //                       className="btn-upload tf-btn bg-color-primary pd-10"
// //                     >
// //                       <svg
// //                         width={21}
// //                         height={20}
// //                         viewBox="0 0 21 20"
// //                         fill="none"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                       >
// //                         <path
// //                           d="M2.375 13.125L6.67417 8.82583C6.84828 8.65172 7.05498 8.51361 7.28246 8.41938C7.50995 8.32515 7.75377 8.27665 8 8.27665C8.24623 8.27665 8.49005 8.32515 8.71754 8.41938C8.94502 8.51361 9.15172 8.65172 9.32583 8.82583L13.625 13.125M12.375 11.875L13.5492 10.7008C13.7233 10.5267 13.93 10.3886 14.1575 10.2944C14.385 10.2001 14.6288 10.1516 14.875 10.1516C15.1212 10.1516 15.365 10.2001 15.5925 10.2944C15.82 10.3886 16.0267 10.5267 16.2008 10.7008L18.625 13.125M3.625 16.25H17.375C17.7065 16.25 18.0245 16.1183 18.2589 15.8839C18.4933 15.6495 18.625 15.3315 18.625 15V5C18.625 4.66848 18.4933 4.35054 18.2589 4.11612C18.0245 3.8817 17.7065 3.75 17.375 3.75H3.625C3.29348 3.75 2.97554 3.8817 2.74112 4.11612C2.5067 4.35054 2.375 4.66848 2.375 5V15C2.375 15.3315 2.5067 15.6495 2.74112 15.8839C2.97554 16.1183 3.29348 16.25 3.625 16.25ZM12.375 6.875H12.3817V6.88167H12.375V6.875ZM12.6875 6.875C12.6875 6.95788 12.6546 7.03737 12.596 7.09597C12.5374 7.15458 12.4579 7.1875 12.375 7.1875C12.2921 7.1875 12.2126 7.15458 12.154 7.09597C12.0954 7.03737 12.0625 6.95788 12.0625 6.875C12.0625 6.79212 12.0954 6.71263 12.154 6.65403C12.2126 6.59542 12.2921 6.5625 12.375 6.5625C12.4579 6.5625 12.5374 6.59542 12.596 6.65403C12.6546 6.71263 12.6875 6.79212 12.6875 6.875Z"
// //                           stroke="white"
// //                           strokeWidth="1.5"
// //                           strokeLinecap="round"
// //                           strokeLinejoin="round"
// //                         />
// //                       </svg>
// //                       Choose File
// //                       <input type="file" className="ip-file" />
// //                     </a>
// //                     <p className="file-name">Or drop file here to upload</p>
// //                   </div>
// //                 </fieldset>
// //                 <fieldset className="box-fieldset">
// //                   <label htmlFor="bathrooms">Description:</label>
// //                   <textarea className="textarea" defaultValue={""} />
// //                 </fieldset>
// //               </div>
// //             </form>
// //           </div>
// //           <div className="text-center">
// //             <a href="#" className="btn-add-floor">
// //               <span className="icon icon-plus" />
// //             </a>
// //           </div>
// //         </div>
// //         <div className="widget-box-2 mb-20">
// //           <h3 className="title">Agent Infomation</h3>
// //           <div className="box-radio-check">
// //             <div className="text-1 mb-16">Choose type agent information?</div>
// //             <fieldset className="radio-item mb-8">
// //               <label>
// //                 <span className="text-1">Your current user information</span>
// //                 <input type="radio" name="radio" id=" floor-plan-1" />
// //                 <span className="btn-radio" />
// //               </label>
// //             </fieldset>
// //             <fieldset className="radio-item  style-1  ">
// //               <label>
// //                 <span className="text-1">Other contact</span>
// //                 <input type="radio" name="radio" id="  floor-plan-2 " />
// //                 <span className="btn-radio" />
// //               </label>
// //             </fieldset>
// //           </div>
// //         </div>
// //         <div className="box-btn">
// //           <a href="#" className="tf-btn bg-color-primary pd-13">
// //             Add Property
// //           </a>
// //           <a href="#" className="tf-btn style-border pd-10">
// //             Save &amp; Preview
// //           </a>
// //         </div>
// //         {/* .footer-dashboard */}
// //         <div className="footer-dashboard">
// //           <p>Copyright © {new Date().getFullYear()} Popty</p>
// //           <ul className="list">
// //             <li>
// //               <a href="#">Privacy</a>
// //             </li>
// //             <li>
// //               <a href="#">Terms</a>
// //             </li>
// //             <li>
// //               <a href="#">Support</a>
// //             </li>
// //           </ul>
// //         </div>
// //         {/* /.footer-dashboard */}
// //       </div>
// //       <div className="overlay-dashboard" />
// //     </div>
// //   );
// // }

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { apiPost } from "../lib/api";

// const amenityOptions = [
//   "Smoke alarm",
//   "Self check-in with lockbox",
//   "Carbon monoxide alarm",
//   "Security cameras",
//   "Hangers",
//   "Extra pillows & blankets",
//   "Bed linens",
//   "TV with standard cable",
//   "Refrigerator",
//   "Dishwasher",
//   "Microwave",
//   "Coffee maker",
// ];

// export default function AddProperty() {
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     full_address: "",
//     zip_code: "",
//     country: "",
//     state: "",
//     neighborhood: "",
//     location: "",
//     map_embed_url: "",
//     price: "",
//     unit_price: "",
//     before_price_label: "",
//     after_price_label: "",
//     property_type: "apartment",
//     property_status: "for-sale",
//     property_label: "new-listing",
//     post_status: "publish",
//     size_sqft: "",
//     land_area_sqft: "",
//     property_code: "",
//     rooms: "",
//     bedrooms: "",
//     bathrooms: "",
//     garages: "",
//     garages_size_sqft: "",
//     year_built: "",
//     virtual_tour_type: "",
//     virtual_tour_embed_code: "",
//     video_url: "",
//   });

//   const [images, setImages] = useState([]);
//   const [previewImages, setPreviewImages] = useState([]);
//   const [amenities, setAmenities] = useState([]);

//   const handleChange = (e) => {
//     setForm((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleImages = (e) => {
//     const files = Array.from(e.target.files || []);
//     setImages(files);
//     setPreviewImages(files.map((file) => URL.createObjectURL(file)));
//   };

//   const toggleAmenity = (name) => {
//     setAmenities((prev) =>
//       prev.includes(name)
//         ? prev.filter((item) => item !== name)
//         : [...prev, name]
//     );
//   };

//   const handleSubmit = async () => {
//     try {
//       const formData = new FormData();

//       Object.entries(form).forEach(([key, value]) => {
//         formData.append(key, value);
//       });

//       amenities.forEach((item) => formData.append("amenities", item));
//       images.forEach((file) => formData.append("images", file));

//       await apiPost("/admindashboard/properties/", formData, true);
//       alert("Property added successfully");

//       setForm({
//         title: "",
//         description: "",
//         full_address: "",
//         zip_code: "",
//         country: "",
//         state: "",
//         neighborhood: "",
//         location: "",
//         map_embed_url: "",
//         price: "",
//         unit_price: "",
//         before_price_label: "",
//         after_price_label: "",
//         property_type: "apartment",
//         property_status: "for-sale",
//         property_label: "new-listing",
//         post_status: "publish",
//         size_sqft: "",
//         land_area_sqft: "",
//         property_code: "",
//         rooms: "",
//         bedrooms: "",
//         bathrooms: "",
//         garages: "",
//         garages_size_sqft: "",
//         year_built: "",
//         virtual_tour_type: "",
//         virtual_tour_embed_code: "",
//         video_url: "",
//       });
//       setImages([]);
//       setPreviewImages([]);
//       setAmenities([]);
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="main-content w-100">
//       <div className="main-content-inner">
//         <div className="widget-box-2 mb-20">
//           <h3 className="title">Upload Media</h3>
//           <input type="file" multiple accept="image/*" onChange={handleImages} />
//           <div className="box-img-upload">
//             {previewImages.map((src, idx) => (
//               <div className="item-upload" key={idx}>
//                 <Image alt="preview" width={200} height={150} src={src} />
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="widget-box-2 mb-20">
//           <h5 className="title">Information</h5>

//           <input name="title" value={form.title} onChange={handleChange} className="form-control mb-10" placeholder="Title" />
//           <textarea name="description" value={form.description} onChange={handleChange} className="textarea mb-10" placeholder="Description" />
//           <input name="full_address" value={form.full_address} onChange={handleChange} className="form-control mb-10" placeholder="Full Address" />
//           <input name="zip_code" value={form.zip_code} onChange={handleChange} className="form-control mb-10" placeholder="Zip Code" />
//           <input name="country" value={form.country} onChange={handleChange} className="form-control mb-10" placeholder="Country" />
//           <input name="state" value={form.state} onChange={handleChange} className="form-control mb-10" placeholder="State" />
//           <input name="neighborhood" value={form.neighborhood} onChange={handleChange} className="form-control mb-10" placeholder="Neighborhood" />
//           <input name="location" value={form.location} onChange={handleChange} className="form-control mb-10" placeholder="Location" />
//           <textarea name="map_embed_url" value={form.map_embed_url} onChange={handleChange} className="textarea mb-10" placeholder="Google Map Embed URL" />
//         </div>

//         <div className="widget-box-2 mb-20">
//           <h3 className="title">Price</h3>
//           <input name="price" value={form.price} onChange={handleChange} className="form-control mb-10" placeholder="Price" />
//           <input name="unit_price" value={form.unit_price} onChange={handleChange} className="form-control mb-10" placeholder="Unit Price" />
//           <input name="before_price_label" value={form.before_price_label} onChange={handleChange} className="form-control mb-10" placeholder="Before Price Label" />
//           <input name="after_price_label" value={form.after_price_label} onChange={handleChange} className="form-control mb-10" placeholder="After Price Label" />
//         </div>

//         <div className="widget-box-2 mb-20">
//           <h3 className="title">Additional Information</h3>

//           <select name="property_type" value={form.property_type} onChange={handleChange} className="form-control mb-10">
//             <option value="apartment">Apartment</option>
//             <option value="villa">Villa</option>
//             <option value="studio">Studio</option>
//             <option value="office">Office</option>
//           </select>

//           <select name="property_status" value={form.property_status} onChange={handleChange} className="form-control mb-10">
//             <option value="for-sale">For Sale</option>
//             <option value="for-rent">For Rent</option>
//           </select>

//           <select name="property_label" value={form.property_label} onChange={handleChange} className="form-control mb-10">
//             <option value="new-listing">New Listing</option>
//             <option value="open-house">Open House</option>
//             <option value="featured">Featured</option>
//           </select>

//           <select name="post_status" value={form.post_status} onChange={handleChange} className="form-control mb-10">
//             <option value="publish">Publish</option>
//             <option value="pending">Pending</option>
//             <option value="hidden">Hidden</option>
//             <option value="sold">Sold</option>
//           </select>

//           <input name="size_sqft" value={form.size_sqft} onChange={handleChange} className="form-control mb-10" placeholder="Size SqFt" />
//           <input name="land_area_sqft" value={form.land_area_sqft} onChange={handleChange} className="form-control mb-10" placeholder="Land Area SqFt" />
//           <input name="property_code" value={form.property_code} onChange={handleChange} className="form-control mb-10" placeholder="Property Code" />
//           <input name="rooms" value={form.rooms} onChange={handleChange} className="form-control mb-10" placeholder="Rooms" />
//           <input name="bedrooms" value={form.bedrooms} onChange={handleChange} className="form-control mb-10" placeholder="Bedrooms" />
//           <input name="bathrooms" value={form.bathrooms} onChange={handleChange} className="form-control mb-10" placeholder="Bathrooms" />
//           <input name="garages" value={form.garages} onChange={handleChange} className="form-control mb-10" placeholder="Garages" />
//           <input name="garages_size_sqft" value={form.garages_size_sqft} onChange={handleChange} className="form-control mb-10" placeholder="Garages Size SqFt" />
//           <input name="year_built" value={form.year_built} onChange={handleChange} className="form-control mb-10" placeholder="Year Built" />
//         </div>

//         <div className="widget-box-2 mb-20">
//           <h5 className="title">Amenities</h5>
//           <div className="box-amenities-property">
//             {amenityOptions.map((item) => (
//               <label key={item} style={{ display: "block", marginBottom: 8 }}>
//                 <input
//                   type="checkbox"
//                   checked={amenities.includes(item)}
//                   onChange={() => toggleAmenity(item)}
//                 />
//                 {" "}{item}
//               </label>
//             ))}
//           </div>
//         </div>

//         <div className="widget-box-2 mb-20">
//           <h3 className="title">Virtual Tour / Video</h3>
//           <input name="virtual_tour_type" value={form.virtual_tour_type} onChange={handleChange} className="form-control mb-10" placeholder="Virtual Tour Type" />
//           <textarea name="virtual_tour_embed_code" value={form.virtual_tour_embed_code} onChange={handleChange} className="textarea mb-10" placeholder="Embedded Code" />
//           <input name="video_url" value={form.video_url} onChange={handleChange} className="form-control mb-10" placeholder="Video URL" />
//         </div>

//         <div className="box-btn">
//           <button type="button" className="tf-btn bg-color-primary pd-13" onClick={handleSubmit}>
//             Add Property
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import React, { useMemo, useState } from "react";
// import Image from "next/image";
// import { apiPost } from "../lib/api";

// const AMENITY_GROUPS = {
//   "Home safety": [
//     "Smoke alarm",
//     "Self check-in with lockbox",
//     "Carbon monoxide alarm",
//     "Security cameras",
//   ],
//   Bedroom: [
//     "Hangers",
//     "Extra pillows & blankets",
//     "Bed linens",
//     "TV with standard cable",
//   ],
//   Kitchen: ["Refrigerator", "Dishwasher", "Microwave", "Coffee maker"],
//   General: [
//     "Lift",
//     "Power Backup",
//     "Parking",
//     "Swimming Pool",
//     "Gym",
//     "Club House",
//     "Kids Play Area",
//     "Garden",
//     "CCTV",
//     "Intercom",
//   ],
// };

// const defaultFloorPlan = () => ({
//   floor_name: "",
//   floor_price: "",
//   price_postfix: "",
//   floor_size: "",
//   size_postfix: "",
//   bedrooms: "",
//   bathrooms: "",
//   description: "",
//   floor_image: null,
//   floor_image_preview: "",
// });

// const initialForm = {
//   title: "",
//   description: "",
//   full_address: "",
//   zip_code: "",
//   country: "",
//   state: "",
//   neighborhood: "",
//   location: "",
//   map_embed_url: "",

//   price: "",
//   unit_price: "",
//   before_price_label: "",
//   after_price_label: "",

//   property_type: "apartment",
//   property_status: "for-sale",
//   property_label: "new-listing",
//   post_status: "publish",

//   size_sqft: "",
//   land_area_sqft: "",
//   property_code: "",
//   rooms: "",
//   bedrooms: "",
//   bathrooms: "",
//   garages: "",
//   garages_size_sqft: "",
//   year_built: "",

//   virtual_tour_type: "embedded",
//   virtual_tour_embed_code: "",
//   video_url: "",

//   is_favorite: false,
//   is_approved: true,
// };

// export default function AddProperty() {
//   const [form, setForm] = useState(initialForm);
//   const [images, setImages] = useState([]);
//   const [imagePreviews, setImagePreviews] = useState([]);
//   const [amenities, setAmenities] = useState([]);
//   const [floorPlans, setFloorPlans] = useState([defaultFloorPlan()]);
//   const [loading, setLoading] = useState(false);

//   const totalSelectedImages = useMemo(() => images.length, [images]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleImagesChange = (e) => {
//     const files = Array.from(e.target.files || []);
//     setImages(files);
//     setImagePreviews(files.map((file) => URL.createObjectURL(file)));
//   };

//   const removeSelectedImage = (index) => {
//     const nextFiles = [...images];
//     const nextPreviews = [...imagePreviews];
//     nextFiles.splice(index, 1);
//     nextPreviews.splice(index, 1);
//     setImages(nextFiles);
//     setImagePreviews(nextPreviews);
//   };

//   const toggleAmenity = (name) => {
//     setAmenities((prev) =>
//       prev.includes(name)
//         ? prev.filter((item) => item !== name)
//         : [...prev, name]
//     );
//   };

//   const updateFloorPlan = (index, field, value) => {
//     setFloorPlans((prev) =>
//       prev.map((plan, i) =>
//         i === index
//           ? {
//               ...plan,
//               [field]: value,
//             }
//           : plan
//       )
//     );
//   };

//   const updateFloorPlanImage = (index, file) => {
//     setFloorPlans((prev) =>
//       prev.map((plan, i) =>
//         i === index
//           ? {
//               ...plan,
//               floor_image: file,
//               floor_image_preview: file ? URL.createObjectURL(file) : "",
//             }
//           : plan
//       )
//     );
//   };

//   const addFloorPlan = () => {
//     setFloorPlans((prev) => [...prev, defaultFloorPlan()]);
//   };

//   const removeFloorPlan = (index) => {
//     setFloorPlans((prev) => prev.filter((_, i) => i !== index));
//   };

//   const loadExampleData = () => {
//     setForm({
//       title: "Luxury Sky View Apartment",
//       description:
//         "A premium fully furnished property with modern amenities, excellent ventilation, spacious layout and strong connectivity to the main city area.",
//       full_address: "A Wing, Sky Heights, Link Road, Goregaon West, Mumbai",
//       zip_code: "400104",
//       country: "India",
//       state: "Maharashtra",
//       neighborhood: "Goregaon West",
//       location: "Goregaon West, Mumbai",
//       map_embed_url:
//         "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.4432132872743!2d72.83792087508629!3d19.174180282047915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7b9e3cc9f3b%3A0x6f7c1b1f4b30b1b3!2sGoregaon%20West%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",

//       price: "18500000",
//       unit_price: "INR",
//       before_price_label: "Starting From",
//       after_price_label: "Onwards",

//       property_type: "apartment",
//       property_status: "for-sale",
//       property_label: "featured",
//       post_status: "publish",

//       size_sqft: "1250",
//       land_area_sqft: "1800",
//       property_code: "PROP-GRW-1001",
//       rooms: "5",
//       bedrooms: "3",
//       bathrooms: "3",
//       garages: "2",
//       garages_size_sqft: "180",
//       year_built: "2024",

//       virtual_tour_type: "embedded",
//       virtual_tour_embed_code:
//         "<iframe src='https://example.com/virtual-tour' width='100%' height='400'></iframe>",
//       video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",

//       is_favorite: true,
//       is_approved: true,
//     });

//     setAmenities([
//       "Smoke alarm",
//       "Security cameras",
//       "Lift",
//       "Power Backup",
//       "Parking",
//       "Swimming Pool",
//       "Gym",
//       "Club House",
//       "Kids Play Area",
//       "Garden",
//       "CCTV",
//     ]);

//     setFloorPlans([
//       {
//         floor_name: "Floor 1",
//         floor_price: "18500000",
//         price_postfix: "INR",
//         floor_size: "1250",
//         size_postfix: "SqFt",
//         bedrooms: "3",
//         bathrooms: "3",
//         description:
//           "Spacious 3 BHK layout with balcony, living room, dining space and utility area.",
//         floor_image: null,
//         floor_image_preview: "",
//       },
//       {
//         floor_name: "Floor 2",
//         floor_price: "19500000",
//         price_postfix: "INR",
//         floor_size: "1320",
//         size_postfix: "SqFt",
//         bedrooms: "3",
//         bathrooms: "3",
//         description:
//           "Upper floor premium plan with bigger living area and master bedroom.",
//         floor_image: null,
//         floor_image_preview: "",
//       },
//     ]);
//   };

//   const resetForm = () => {
//     setForm(initialForm);
//     setImages([]);
//     setImagePreviews([]);
//     setAmenities([]);
//     setFloorPlans([defaultFloorPlan()]);
//   };

//  const handleSubmit = async () => {
//   try {
//     setLoading(true);

//     const formData = new FormData();

//     Object.entries(form).forEach(([key, value]) => {
//       formData.append(key, value);
//     });

//     formData.append("amenities", JSON.stringify(amenities));

//     images.forEach((file) => {
//       formData.append("images", file);
//     });

//     floorPlans.forEach((plan, index) => {
//       formData.append(`floor_plans[${index}][floor_name]`, plan.floor_name);
//       formData.append(`floor_plans[${index}][floor_price]`, plan.floor_price);
//       formData.append(`floor_plans[${index}][price_postfix]`, plan.price_postfix);
//       formData.append(`floor_plans[${index}][floor_size]`, plan.floor_size);
//       formData.append(`floor_plans[${index}][size_postfix]`, plan.size_postfix);
//       formData.append(`floor_plans[${index}][bedrooms]`, plan.bedrooms);
//       formData.append(`floor_plans[${index}][bathrooms]`, plan.bathrooms);
//       formData.append(`floor_plans[${index}][description]`, plan.description);

//       if (plan.floor_image) {
//         formData.append(`floor_plans[${index}][floor_image]`, plan.floor_image);
//       }
//     });

//     await apiPost("/admindashboard/properties/", formData, true);
//     alert("Property added successfully");
//     resetForm();
//   } catch (error) {
//     console.error(error);
//     alert(error.message || "Property create failed");
//   } finally {
//     setLoading(false);
//   }
// };

//   return (
//     <div className="main-content w-100">
//       <div className="main-content-inner">
//         <div className="button-show-hide show-mb">
//           <span className="body-1">Show Dashboard</span>
//         </div>

//         <div className="widget-box-2 mb-20">
//           <div
//             style={{
//               display: "flex",
//               gap: "12px",
//               flexWrap: "wrap",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <h3 className="title">Add Property</h3>

//             <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
//               <button
//                 type="button"
//                 className="tf-btn style-border pd-10"
//                 onClick={loadExampleData}
//               >
//                 Load Example Data
//               </button>
//               <button
//                 type="button"
//                 className="tf-btn style-border pd-10"
//                 onClick={resetForm}
//               >
//                 Reset
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="widget-box-2 mb-20">
//           <h3 className="title">Upload Media</h3>

//           <div className="box-uploadfile text-center">
//             <div className="uploadfile">
//               <label className="tf-btn bg-color-primary pd-10 btn-upload mx-auto">
//                 Select photos
//                 <input
//                   type="file"
//                   className="ip-file"
//                   multiple
//                   accept="image/*"
//                   onChange={handleImagesChange}
//                 />
//               </label>
//               <p className="file-name fw-5">
//                 or drag photos here <br />
//                 <span>(Up to 10 photos)</span>
//               </p>
//               <p className="file-name fw-5">
//                 Selected Photos: <span>{totalSelectedImages}</span>
//               </p>
//             </div>
//           </div>

//           {imagePreviews.length > 0 && (
//             <div className="box-img-upload">
//               {imagePreviews.map((src, index) => (
//                 <div className="item-upload file-delete" key={index}>
//                   <Image alt="preview" width={615} height={405} src={src} />
//                   <button
//                     type="button"
//                     className="remove-file"
//                     onClick={() => removeSelectedImage(index)}
//                     style={{
//                       border: "none",
//                       background: "transparent",
//                       cursor: "pointer",
//                     }}
//                   >
//                     <span className="icon icon-trashcan1" />
//                   </button>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         <div className="widget-box-2 mb-20">
//           <h5 className="title">Information</h5>

//           <fieldset className="box box-fieldset">
//             <label>
//               Title:<span>*</span>
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               name="title"
//               value={form.title}
//               onChange={handleChange}
//               placeholder="Enter property title"
//             />
//           </fieldset>

//           <fieldset className="box box-fieldset">
//             <label>Description:</label>
//             <textarea
//               className="textarea"
//               name="description"
//               value={form.description}
//               onChange={handleChange}
//               placeholder="Enter property description"
//             />
//           </fieldset>

//           <div className="box grid-layout-3 gap-30">
//             <fieldset className="box-fieldset">
//               <label>
//                 Full Address:<span>*</span>
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="full_address"
//                 value={form.full_address}
//                 onChange={handleChange}
//                 placeholder="Enter property full address"
//               />
//             </fieldset>

//             <fieldset className="box-fieldset">
//               <label>
//                 Zip Code:<span>*</span>
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="zip_code"
//                 value={form.zip_code}
//                 onChange={handleChange}
//                 placeholder="Enter zip code"
//               />
//             </fieldset>

//             <fieldset className="box-fieldset">
//               <label>
//                 Country:<span>*</span>
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="country"
//                 value={form.country}
//                 onChange={handleChange}
//                 placeholder="Enter country"
//               />
//             </fieldset>
//           </div>

//           <div className="box grid-layout-2 gap-30">
//             <fieldset className="box-fieldset">
//               <label>
//                 Province/State:<span>*</span>
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="state"
//                 value={form.state}
//                 onChange={handleChange}
//                 placeholder="Enter state"
//               />
//             </fieldset>

//             <fieldset className="box-fieldset">
//               <label>
//                 Neighborhood:<span>*</span>
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="neighborhood"
//                 value={form.neighborhood}
//                 onChange={handleChange}
//                 placeholder="Enter neighborhood"
//               />
//             </fieldset>
//           </div>

//           <div className="box box-fieldset">
//             <label>
//               Location:<span>*</span>
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               name="location"
//               value={form.location}
//               onChange={handleChange}
//               placeholder="Enter location"
//             />
//           </div>

//           <div className="box box-fieldset">
//             <label>Google Map Embed URL:</label>
//             <textarea
//               className="textarea"
//               name="map_embed_url"
//               value={form.map_embed_url}
//               onChange={handleChange}
//               placeholder="Paste iframe src or embed url"
//             />
//           </div>

//           {form.map_embed_url && (
//             <div className="box box-fieldset">
//               <iframe
//                 className="map"
//                 src={form.map_embed_url}
//                 width="100%"
//                 height={456}
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Property Map"
//               />
//             </div>
//           )}
//         </div>

//         <div className="widget-box-2 mb-20">
//           <h3 className="title">Price</h3>

//           <div className="box grid-layout-2 gap-30">
//             <fieldset className="box-fieldset mb-30">
//               <label>
//                 Price:<span>*</span>
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="price"
//                 value={form.price}
//                 onChange={handleChange}
//                 placeholder="Example: 18500000"
//               />
//             </fieldset>

//             <fieldset className="box-fieldset mb-30">
//               <label>
//                 Unit Price:<span>*</span>
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="unit_price"
//                 value={form.unit_price}
//                 onChange={handleChange}
//                 placeholder="Example: INR"
//               />
//             </fieldset>
//           </div>

//           <div className="grid-layout-2 gap-30">
//             <fieldset className="box-fieldset">
//               <label>Before Price Label:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="before_price_label"
//                 value={form.before_price_label}
//                 onChange={handleChange}
//                 placeholder="Example: Starting From"
//               />
//             </fieldset>

//             <fieldset className="box-fieldset">
//               <label>After Price Label:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="after_price_label"
//                 value={form.after_price_label}
//                 onChange={handleChange}
//                 placeholder="Example: Onwards"
//               />
//             </fieldset>
//           </div>
//         </div>

//         <div className="widget-box-2 mb-20">
//           <h3 className="title">Additional Information</h3>

//           <div className="box grid-layout-3 gap-30">
//             <fieldset className="box-fieldset">
//               <label>
//                 Property Type:<span>*</span>
//               </label>
//               <select
//                 className="form-control"
//                 name="property_type"
//                 value={form.property_type}
//                 onChange={handleChange}
//               >
//                 <option value="apartment">Apartment</option>
//                 <option value="villa">Villa</option>
//                 <option value="studio">Studio</option>
//                 <option value="office">Office</option>
//               </select>
//             </fieldset>

//             <fieldset className="box-fieldset">
//               <label>
//                 Property Status:<span>*</span>
//               </label>
//               <select
//                 className="form-control"
//                 name="property_status"
//                 value={form.property_status}
//                 onChange={handleChange}
//               >
//                 <option value="for-rent">For Rent</option>
//                 <option value="for-sale">For Sale</option>
//               </select>
//             </fieldset>

//             <fieldset className="box-fieldset">
//               <label>
//                 Property Label:<span>*</span>
//               </label>
//               <select
//                 className="form-control"
//                 name="property_label"
//                 value={form.property_label}
//                 onChange={handleChange}
//               >
//                 <option value="new-listing">New Listing</option>
//                 <option value="open-house">Open House</option>
//                 <option value="featured">Featured</option>
//               </select>
//             </fieldset>
//           </div>

//           <div className="box grid-layout-3 gap-30">
//             <fieldset className="box-fieldset">
//               <label>
//                 Post Status:<span>*</span>
//               </label>
//               <select
//                 className="form-control"
//                 name="post_status"
//                 value={form.post_status}
//                 onChange={handleChange}
//               >
//                 <option value="publish">Publish</option>
//                 <option value="pending">Pending</option>
//                 <option value="hidden">Hidden</option>
//                 <option value="sold">Sold</option>
//               </select>
//             </fieldset>

//             <fieldset className="box-fieldset">
//               <label>Favorite</label>
//               <div style={{ paddingTop: "14px" }}>
//                 <input
//                   type="checkbox"
//                   name="is_favorite"
//                   checked={form.is_favorite}
//                   onChange={handleChange}
//                 />{" "}
//                 Mark as favorite
//               </div>
//             </fieldset>

//             <fieldset className="box-fieldset">
//               <label>Approved</label>
//               <div style={{ paddingTop: "14px" }}>
//                 <input
//                   type="checkbox"
//                   name="is_approved"
//                   checked={form.is_approved}
//                   onChange={handleChange}
//                 />{" "}
//                 Mark as approved
//               </div>
//             </fieldset>
//           </div>

//           <div className="box grid-layout-3 gap-30">
//             <fieldset className="box-fieldset">
//               <label>
//                 Size (SqFt):<span>*</span>
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="size_sqft"
//                 value={form.size_sqft}
//                 onChange={handleChange}
//               />
//             </fieldset>

//             <fieldset className="box-fieldset">
//               <label>
//                 Land Area (SqFt):<span>*</span>
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="land_area_sqft"
//                 value={form.land_area_sqft}
//                 onChange={handleChange}
//               />
//             </fieldset>

//             <fieldset className="box-fieldset">
//               <label>
//                 Property ID:<span>*</span>
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="property_code"
//                 value={form.property_code}
//                 onChange={handleChange}
//               />
//             </fieldset>
//           </div>

//           <div className="box grid-layout-3 gap-30">
//             <fieldset className="box-fieldset">
//               <label>
//                 Rooms:<span>*</span>
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="rooms"
//                 value={form.rooms}
//                 onChange={handleChange}
//               />
//             </fieldset>

//             <fieldset className="box-fieldset">
//               <label>
//                 Bedrooms:<span>*</span>
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="bedrooms"
//                 value={form.bedrooms}
//                 onChange={handleChange}
//               />
//             </fieldset>

//             <fieldset className="box-fieldset">
//               <label>
//                 Bathrooms:<span>*</span>
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="bathrooms"
//                 value={form.bathrooms}
//                 onChange={handleChange}
//               />
//             </fieldset>
//           </div>

//           <div className="box grid-layout-3 gap-30">
//             <fieldset className="box-fieldset">
//               <label>
//                 Garages:<span>*</span>
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="garages"
//                 value={form.garages}
//                 onChange={handleChange}
//               />
//             </fieldset>

//             <fieldset className="box-fieldset">
//               <label>
//                 Garages Size (SqFt):<span>*</span>
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="garages_size_sqft"
//                 value={form.garages_size_sqft}
//                 onChange={handleChange}
//               />
//             </fieldset>

//             <fieldset className="box-fieldset">
//               <label>
//                 Year Built:<span>*</span>
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="year_built"
//                 value={form.year_built}
//                 onChange={handleChange}
//               />
//             </fieldset>
//           </div>
//         </div>

//         <div className="widget-box-2 mb-20">
//           <h5 className="title">
//             Amenities<span>*</span>
//           </h5>

//           <div className="box-amenities-property">
//             {Object.entries(AMENITY_GROUPS).map(([group, items]) => (
//               <div className="box-amenities" key={group}>
//                 <div className="title-amenities fw-6 text-color-heading text-1">
//                   {group}
//                 </div>
//                 <div className="list-amenities">
//                   {items.map((item) => (
//                     <fieldset className="checkbox-item style-1" key={item}>
//                       <label>
//                         <span className="text-4">{item}</span>
//                         <input
//                           type="checkbox"
//                           checked={amenities.includes(item)}
//                           onChange={() => toggleAmenity(item)}
//                         />
//                         <span className="btn-checkbox" />
//                       </label>
//                     </fieldset>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="widget-box-2 mb-20">
//           <h3 className="title">Virtual Tour 360</h3>

//           <div className="box-radio-check">
//             <div className="text-btn mb-16">Virtual Tour Type:</div>

//             <fieldset className="radio-item">
//               <label>
//                 <span className="text-1">Embedded code</span>
//                 <input
//                   type="radio"
//                   name="virtual_tour_type"
//                   value="embedded"
//                   checked={form.virtual_tour_type === "embedded"}
//                   onChange={handleChange}
//                 />
//                 <span className="btn-radio" />
//               </label>
//             </fieldset>

//             <fieldset className="radio-item style-1">
//               <label>
//                 <span className="text-1">Upload image</span>
//                 <input
//                   type="radio"
//                   name="virtual_tour_type"
//                   value="image"
//                   checked={form.virtual_tour_type === "image"}
//                   onChange={handleChange}
//                 />
//                 <span className="btn-radio" />
//               </label>
//             </fieldset>

//             <fieldset className="box-fieldset">
//               <label>Embedded Code Virtual 360</label>
//               <textarea
//                 className="textarea"
//                 name="virtual_tour_embed_code"
//                 value={form.virtual_tour_embed_code}
//                 onChange={handleChange}
//                 placeholder="Paste embedded code here"
//               />
//             </fieldset>
//           </div>
//         </div>

//         <div className="widget-box-2 mb-20">
//           <h3 className="title">Videos</h3>
//           <fieldset className="box-fieldset">
//             <label className="text-btn">Video URL:</label>
//             <input
//               type="text"
//               className="form-control"
//               name="video_url"
//               value={form.video_url}
//               onChange={handleChange}
//               placeholder="Youtube / Vimeo URL"
//             />
//           </fieldset>
//         </div>

//         <div className="widget-box-2 mb-20">
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               gap: "15px",
//               alignItems: "center",
//               flexWrap: "wrap",
//             }}
//           >
//             <h3 className="title">Property Floor Plans</h3>
//             <button
//               type="button"
//               className="tf-btn bg-color-primary pd-10"
//               onClick={addFloorPlan}
//             >
//               Add Floor Plan
//             </button>
//           </div>

//           {floorPlans.map((plan, index) => (
//             <div className="box-floor-property file-delete" key={index}>
//               <div className="top d-flex justify-content-between align-items-center">
//                 <h6>{plan.floor_name || `Floor ${index + 1}`}</h6>
//                 {floorPlans.length > 1 && (
//                   <button
//                     type="button"
//                     className="remove-file"
//                     onClick={() => removeFloorPlan(index)}
//                     style={{
//                       border: "none",
//                       background: "transparent",
//                       cursor: "pointer",
//                     }}
//                   >
//                     <span className="icon icon-close" />
//                   </button>
//                 )}
//               </div>

//               <div className="box box-fieldset">
//                 <label>Floor Name:</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   value={plan.floor_name}
//                   onChange={(e) =>
//                     updateFloorPlan(index, "floor_name", e.target.value)
//                   }
//                   placeholder="Floor 1"
//                 />
//               </div>

//               <div className="grid-layout-2 box gap-30">
//                 <fieldset className="box-fieldset">
//                   <label>Floor Price:</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={plan.floor_price}
//                     onChange={(e) =>
//                       updateFloorPlan(index, "floor_price", e.target.value)
//                     }
//                   />
//                 </fieldset>

//                 <fieldset className="box-fieldset">
//                   <label>Price Postfix:</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={plan.price_postfix}
//                     onChange={(e) =>
//                       updateFloorPlan(index, "price_postfix", e.target.value)
//                     }
//                     placeholder="INR"
//                   />
//                 </fieldset>
//               </div>

//               <div className="grid-layout-2 box gap-30">
//                 <fieldset className="box-fieldset">
//                   <label>Floor Size:</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={plan.floor_size}
//                     onChange={(e) =>
//                       updateFloorPlan(index, "floor_size", e.target.value)
//                     }
//                   />
//                 </fieldset>

//                 <fieldset className="box-fieldset">
//                   <label>Size Postfix:</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={plan.size_postfix}
//                     onChange={(e) =>
//                       updateFloorPlan(index, "size_postfix", e.target.value)
//                     }
//                     placeholder="SqFt"
//                   />
//                 </fieldset>
//               </div>

//               <div className="grid-layout-2 box gap-30">
//                 <fieldset className="box-fieldset">
//                   <label>Bedrooms:</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={plan.bedrooms}
//                     onChange={(e) =>
//                       updateFloorPlan(index, "bedrooms", e.target.value)
//                     }
//                   />
//                 </fieldset>

//                 <fieldset className="box-fieldset">
//                   <label>Bathrooms:</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={plan.bathrooms}
//                     onChange={(e) =>
//                       updateFloorPlan(index, "bathrooms", e.target.value)
//                     }
//                   />
//                 </fieldset>
//               </div>

//               <div className="grid-layout-2 box gap-30">
//                 <fieldset className="box-fieldset">
//                   <label>Floor Image:</label>
//                   <div className="box-floor-img uploadfile">
//                     <label className="btn-upload tf-btn bg-color-primary pd-10">
//                       Choose File
//                       <input
//                         type="file"
//                         className="ip-file"
//                         accept="image/*"
//                         onChange={(e) =>
//                           updateFloorPlanImage(index, e.target.files?.[0] || null)
//                         }
//                       />
//                     </label>
//                     <p className="file-name">Or drop file here to upload</p>

//                     {plan.floor_image_preview && (
//                       <div style={{ marginTop: "12px" }}>
//                         <Image
//                           src={plan.floor_image_preview}
//                           alt="floor-preview"
//                           width={300}
//                           height={180}
//                         />
//                       </div>
//                     )}
//                   </div>
//                 </fieldset>

//                 <fieldset className="box-fieldset">
//                   <label>Description:</label>
//                   <textarea
//                     className="textarea"
//                     value={plan.description}
//                     onChange={(e) =>
//                       updateFloorPlan(index, "description", e.target.value)
//                     }
//                     placeholder="Floor description"
//                   />
//                 </fieldset>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="box-btn">
//           <button
//             type="button"
//             className="tf-btn bg-color-primary pd-13"
//             onClick={handleSubmit}
//             disabled={loading}
//           >
//             {loading ? "Adding..." : "Add Property"}
//           </button>

//           <button
//             type="button"
//             className="tf-btn style-border pd-10"
//             onClick={loadExampleData}
//           >
//             Save & Preview Example
//           </button>
//         </div>

//         <div className="footer-dashboard">
//           <p>Copyright © {new Date().getFullYear()} Popty</p>
//           <ul className="list">
//             <li>
//               <a href="#">Privacy</a>
//             </li>
//             <li>
//               <a href="#">Terms</a>
//             </li>
//             <li>
//               <a href="#">Support</a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="overlay-dashboard" />
//     </div>
//   );
// }

"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { apiGet, apiPost, apiPut } from "../lib/api";

const AMENITY_GROUPS = {
  "Home safety": [
    "Smoke alarm",
    "Self check-in with lockbox",
    "Carbon monoxide alarm",
    "Security cameras",
  ],
  Bedroom: [
    "Hangers",
    "Extra pillows & blankets",
    "Bed linens",
    "TV with standard cable",
  ],
  Kitchen: ["Refrigerator", "Dishwasher", "Microwave", "Coffee maker"],
  General: [
    "Lift",
    "Power Backup",
    "Parking",
    "Swimming Pool",
    "Gym",
    "Club House",
    "Kids Play Area",
    "Garden",
    "CCTV",
    "Intercom",
  ],
};

const defaultFloorPlan = () => ({
  floor_name: "",
  floor_price: "",
  price_postfix: "",
  floor_size: "",
  size_postfix: "",
  bedrooms: "",
  bathrooms: "",
  description: "",
  floor_image: null,
  floor_image_preview: "",
});

const initialForm = {
  title: "",
  description: "",
  full_address: "",
  zip_code: "",
  country: "",
  state: "",
  neighborhood: "",
  location: "",
  map_embed_url: "",

  price: "",
  unit_price: "",
  before_price_label: "",
  after_price_label: "",

  property_type: "apartment",
  property_status: "for-sale",
  property_label: "new-listing",
  post_status: "publish",

  size_sqft: "",
  land_area_sqft: "",
  property_code: "",
  rooms: "",
  bedrooms: "",
  bathrooms: "",
  garages: "",
  garages_size_sqft: "",
  year_built: "",

  virtual_tour_type: "embedded",
  virtual_tour_embed_code: "",
  video_url: "",

  city: "",
  developer_name: "",
  short_location: "",
  carpet_area: "",
  possession_date: "",
  is_favorite: false,
  is_approved: true,
};

export default function AddProperty() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get("id");
  const isEditMode = !!editId;

  const [form, setForm] = useState(initialForm);
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [floorPlans, setFloorPlans] = useState([defaultFloorPlan()]);
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);

  const totalSelectedImages = useMemo(() => images.length, [images]);

  useEffect(() => {
    const loadPropertyForEdit = async () => {
      if (!editId) return;

      try {
        setPageLoading(true);
        const res = await apiGet(`/admindashboard/properties/${editId}/`);

        setForm({
          title: res.title || "",
          description: res.description || "",
          full_address: res.full_address || "",
          zip_code: res.zip_code || "",
          country: res.country || "",
          state: res.state || "",
          neighborhood: res.neighborhood || "",
          location: res.location || "",
          map_embed_url: res.map_embed_url || "",

          price: res.price || "",
          unit_price: res.unit_price || "",
          before_price_label: res.before_price_label || "",
          after_price_label: res.after_price_label || "",

          property_type: res.property_type || "apartment",
          property_status: res.property_status || "for-sale",
          property_label: res.property_label || "new-listing",
          post_status: res.post_status || "publish",

          size_sqft: res.size_sqft || "",
          land_area_sqft: res.land_area_sqft || "",
          property_code: res.property_code || "",
          rooms: res.rooms || "",
          bedrooms: res.bedrooms || "",
          bathrooms: res.bathrooms || "",
          garages: res.garages || "",
          garages_size_sqft: res.garages_size_sqft || "",
          year_built: res.year_built || "",

          virtual_tour_type: res.virtual_tour_type || "embedded",
          virtual_tour_embed_code: res.virtual_tour_embed_code || "",
          video_url: res.video_url || "",
          city: res.city || "",
          developer_name: res.developer_name || "",
          short_location: res.short_location || "",
          carpet_area: res.carpet_area || "",
          possession_date: res.possession_date || "",
          is_favorite: !!res.is_favorite,
          is_approved: !!res.is_approved,
        });

        setAmenities(Array.isArray(res.amenities) ? res.amenities : []);

        const existingImages = Array.isArray(res.images) ? res.images : [];
        setImages([]);
        setImagePreviews(
          existingImages.map((img) => img.image_url).filter(Boolean)
        );

        const existingFloorPlans = Array.isArray(res.floor_plans)
          ? res.floor_plans.map((plan) => ({
              floor_name: plan.floor_name || "",
              floor_price: plan.floor_price || "",
              price_postfix: plan.price_postfix || "",
              floor_size: plan.floor_size || "",
              size_postfix: plan.size_postfix || "",
              bedrooms: plan.bedrooms || "",
              bathrooms: plan.bathrooms || "",
              description: plan.description || "",
              floor_image: null,
              floor_image_preview: plan.floor_image_url || "",
            }))
          : [];

        setFloorPlans(
          existingFloorPlans.length ? existingFloorPlans : [defaultFloorPlan()]
        );
      } catch (error) {
        console.error("Edit load error:", error);
        alert("Property data load nahi hua");
      } finally {
        setPageLoading(false);
      }
    };

    loadPropertyForEdit();
  }, [editId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files || []);
    setImages(files);
    setImagePreviews(files.map((file) => URL.createObjectURL(file)));
  };

  const removeSelectedImage = (index) => {
    const nextFiles = [...images];
    const nextPreviews = [...imagePreviews];
    nextFiles.splice(index, 1);
    nextPreviews.splice(index, 1);
    setImages(nextFiles);
    setImagePreviews(nextPreviews);
  };

  const toggleAmenity = (name) => {
    setAmenities((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  const updateFloorPlan = (index, field, value) => {
    setFloorPlans((prev) =>
      prev.map((plan, i) =>
        i === index
          ? {
              ...plan,
              [field]: value,
            }
          : plan
      )
    );
  };

  const updateFloorPlanImage = (index, file) => {
    setFloorPlans((prev) =>
      prev.map((plan, i) =>
        i === index
          ? {
              ...plan,
              floor_image: file,
              floor_image_preview: file ? URL.createObjectURL(file) : plan.floor_image_preview,
            }
          : plan
      )
    );
  };

  const addFloorPlan = () => {
    setFloorPlans((prev) => [...prev, defaultFloorPlan()]);
  };

  const removeFloorPlan = (index) => {
    setFloorPlans((prev) => prev.filter((_, i) => i !== index));
  };

  const loadExampleData = () => {
    setForm({
      title: "Luxury Sky View Apartment",
      description:
        "A premium fully furnished property with modern amenities, excellent ventilation, spacious layout and strong connectivity to the main city area.",
      full_address: "A Wing, Sky Heights, Link Road, Goregaon West, Mumbai",
      zip_code: "400104",
      country: "India",
      state: "Maharashtra",
      neighborhood: "Goregaon West",
      location: "Goregaon West, Mumbai",
      map_embed_url:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.4432132872743!2d72.83792087508629!3d19.174180282047915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7b9e3cc9f3b%3A0x6f7c1b1f4b30b1b3!2sGoregaon%20West%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",

      price: "18500000",
      unit_price: "INR",
      before_price_label: "Starting From",
      after_price_label: "Onwards",

      property_type: "apartment",
      property_status: "for-sale",
      property_label: "featured",
      post_status: "publish",

      size_sqft: "1250",
      land_area_sqft: "1800",
      property_code: "PROP-GRW-1001",
      rooms: "5",
      bedrooms: "3",
      bathrooms: "3",
      garages: "2",
      garages_size_sqft: "180",
      year_built: "2024",

      virtual_tour_type: "embedded",
      virtual_tour_embed_code:
        "<iframe src='https://example.com/virtual-tour' width='100%' height='400'></iframe>",
      video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",

      is_favorite: true,
      is_approved: true,
    });

    setAmenities([
      "Smoke alarm",
      "Security cameras",
      "Lift",
      "Power Backup",
      "Parking",
      "Swimming Pool",
      "Gym",
      "Club House",
      "Kids Play Area",
      "Garden",
      "CCTV",
    ]);

    setFloorPlans([
      {
        floor_name: "Floor 1",
        floor_price: "18500000",
        price_postfix: "INR",
        floor_size: "1250",
        size_postfix: "SqFt",
        bedrooms: "3",
        bathrooms: "3",
        description:
          "Spacious 3 BHK layout with balcony, living room, dining space and utility area.",
        floor_image: null,
        floor_image_preview: "",
      },
      {
        floor_name: "Floor 2",
        floor_price: "19500000",
        price_postfix: "INR",
        floor_size: "1320",
        size_postfix: "SqFt",
        bedrooms: "3",
        bathrooms: "3",
        description:
          "Upper floor premium plan with bigger living area and master bedroom.",
        floor_image: null,
        floor_image_preview: "",
      },
    ]);
  };

  const resetForm = () => {
    setForm(initialForm);
    setImages([]);
    setImagePreviews([]);
    setAmenities([]);
    setFloorPlans([defaultFloorPlan()]);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const formData = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      formData.append("amenities", JSON.stringify(amenities));

      images.forEach((file) => {
        formData.append("images", file);
      });

      floorPlans.forEach((plan, index) => {
        formData.append(`floor_plans[${index}][floor_name]`, plan.floor_name);
        formData.append(`floor_plans[${index}][floor_price]`, plan.floor_price);
        formData.append(`floor_plans[${index}][price_postfix]`, plan.price_postfix);
        formData.append(`floor_plans[${index}][floor_size]`, plan.floor_size);
        formData.append(`floor_plans[${index}][size_postfix]`, plan.size_postfix);
        formData.append(`floor_plans[${index}][bedrooms]`, plan.bedrooms);
        formData.append(`floor_plans[${index}][bathrooms]`, plan.bathrooms);
        formData.append(`floor_plans[${index}][description]`, plan.description);

        if (plan.floor_image) {
          formData.append(`floor_plans[${index}][floor_image]`, plan.floor_image);
        }
      });

      if (isEditMode) {
        await apiPut(`/admindashboard/properties/${editId}/`, formData, true);
        alert("Property updated successfully");
      } else {
        await apiPost("/admindashboard/properties/", formData, true);
        alert("Property added successfully");
        resetForm();
      }

      router.push("/my-property");
    } catch (error) {
      console.error(error);
      alert(error.message || "Property save failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-content w-100">
      <div className="main-content-inner">
        <div className="button-show-hide show-mb">
          <span className="body-1">Show Dashboard</span>
        </div>

        {pageLoading && <p>Loading property data...</p>}

        <div className="widget-box-2 mb-20">
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3 className="title">{isEditMode ? "Edit Property" : "Add Property"}</h3>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <button
                type="button"
                className="tf-btn style-border pd-10"
                onClick={loadExampleData}
              >
                Load Example Data
              </button>
              <button
                type="button"
                className="tf-btn style-border pd-10"
                onClick={resetForm}
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        <div className="widget-box-2 mb-20">
          <h3 className="title">Upload Media</h3>

          <div className="box-uploadfile text-center">
            <div className="uploadfile">
              <label className="tf-btn bg-color-primary pd-10 btn-upload mx-auto">
                Select photos
                <input
                  type="file"
                  className="ip-file"
                  multiple
                  accept="image/*"
                  onChange={handleImagesChange}
                />
              </label>
              <p className="file-name fw-5">
                or drag photos here <br />
                <span>(Up to 10 photos)</span>
              </p>
              <p className="file-name fw-5">
                Selected Photos: <span>{totalSelectedImages}</span>
              </p>
            </div>
          </div>

          {imagePreviews.length > 0 && (
            <div className="box-img-upload">
              {imagePreviews.map((src, index) => (
                <div className="item-upload file-delete" key={index}>
                  <Image alt="preview" width={615} height={405} src={src} />
                  <button
                    type="button"
                    className="remove-file"
                    onClick={() => removeSelectedImage(index)}
                    style={{
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                    }}
                  >
                    <span className="icon icon-trashcan1" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="widget-box-2 mb-20">
          <h5 className="title">Information</h5>

          <fieldset className="box box-fieldset">
            <label>
              Title:<span>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Enter property title"
            />
          </fieldset>

          <fieldset className="box box-fieldset">
            <label>Description:</label>
            <textarea
              className="textarea"
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter property description"
            />
          </fieldset>

          <div className="box grid-layout-3 gap-30">
            <fieldset className="box-fieldset">
              <label>
                Full Address:<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="full_address"
                value={form.full_address}
                onChange={handleChange}
                placeholder="Enter property full address"
              />
            </fieldset>

            <fieldset className="box-fieldset">
              <label>
                Zip Code:<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="zip_code"
                value={form.zip_code}
                onChange={handleChange}
                placeholder="Enter zip code"
              />
            </fieldset>

            <fieldset className="box-fieldset">
              <label>
                Country:<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="country"
                value={form.country}
                onChange={handleChange}
                placeholder="Enter country"
              />
            </fieldset>
          </div>

          <div className="box grid-layout-2 gap-30">
            <fieldset className="box-fieldset">
              <label>
                Province/State:<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="state"
                value={form.state}
                onChange={handleChange}
                placeholder="Enter state"
              />
            </fieldset>

            <fieldset className="box-fieldset">
              <label>
                Neighborhood:<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="neighborhood"
                value={form.neighborhood}
                onChange={handleChange}
                placeholder="Enter neighborhood"
              />
            </fieldset>
          </div>

          <div className="box box-fieldset">
            <label>
              Location:<span>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Enter location"
            />
          </div>

          <div className="box box-fieldset">
            <label>Google Map Embed URL:</label>
            <textarea
              className="textarea"
              name="map_embed_url"
              value={form.map_embed_url}
              onChange={handleChange}
              placeholder="Paste iframe src or embed url"
            />
          </div>

          {form.map_embed_url && (
            <div className="box box-fieldset">
              <iframe
                className="map"
                src={form.map_embed_url}
                width="100%"
                height={456}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Property Map"
              />
            </div>
          )}
        </div>

        <div className="widget-box-2 mb-20">
          <h3 className="title">Price</h3>

          <div className="box grid-layout-2 gap-30">
            <fieldset className="box-fieldset mb-30">
              <label>
                Price:<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="Example: 18500000"
              />
            </fieldset>

            <fieldset className="box-fieldset mb-30">
              <label>
                Unit Price:<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="unit_price"
                value={form.unit_price}
                onChange={handleChange}
                placeholder="Example: INR"
              />
            </fieldset>
          </div>

          <div className="grid-layout-2 gap-30">
            <fieldset className="box-fieldset">
              <label>Before Price Label:</label>
              <input
                type="text"
                className="form-control"
                name="before_price_label"
                value={form.before_price_label}
                onChange={handleChange}
                placeholder="Example: Starting From"
              />
            </fieldset>

            <fieldset className="box-fieldset">
              <label>After Price Label:</label>
              <input
                type="text"
                className="form-control"
                name="after_price_label"
                value={form.after_price_label}
                onChange={handleChange}
                placeholder="Example: Onwards"
              />
            </fieldset>
          </div>
        </div>

        <div className="widget-box-2 mb-20">
          <h3 className="title">Additional Information</h3>

          <div className="box grid-layout-3 gap-30">
            <fieldset className="box-fieldset">
              <label>
                Property Type:<span>*</span>
              </label>
              <select
                className="form-control"
                name="property_type"
                value={form.property_type}
                onChange={handleChange}
              >
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="studio">Studio</option>
                <option value="office">Office</option>
              </select>
            </fieldset>

            <fieldset className="box-fieldset">
              <label>
                Property Status:<span>*</span>
              </label>
              <select
                className="form-control"
                name="property_status"
                value={form.property_status}
                onChange={handleChange}
              >
                <option value="for-rent">For Rent</option>
                <option value="for-sale">For Sale</option>
              </select>
            </fieldset>

            <fieldset className="box-fieldset">
              <label>
                Property Label:<span>*</span>
              </label>
              <select
                className="form-control"
                name="property_label"
                value={form.property_label}
                onChange={handleChange}
              >
                <option value="new-listing">New Listing</option>
                <option value="open-house">Open House</option>
                <option value="featured">Featured</option>
              </select>
            </fieldset>
          </div>

          <div className="box grid-layout-3 gap-30">
            <fieldset className="box-fieldset">
              <label>
                Post Status:<span>*</span>
              </label>
              <select
                className="form-control"
                name="post_status"
                value={form.post_status}
                onChange={handleChange}
              >
                <option value="publish">Publish</option>
                <option value="pending">Pending</option>
                <option value="hidden">Hidden</option>
                <option value="sold">Sold</option>
              </select>
            </fieldset>

            <fieldset className="box-fieldset">
              <label>Favorite</label>
              <div style={{ paddingTop: "14px" }}>
                <input
                  type="checkbox"
                  name="is_favorite"
                  checked={form.is_favorite}
                  onChange={handleChange}
                />{" "}
                Mark as favorite
              </div>
            </fieldset>

            <fieldset className="box-fieldset">
              <label>Approved</label>
              <div style={{ paddingTop: "14px" }}>
                <input
                  type="checkbox"
                  name="is_approved"
                  checked={form.is_approved}
                  onChange={handleChange}
                />{" "}
                Mark as approved
              </div>
            </fieldset>
          </div>

          <div className="box grid-layout-3 gap-30">
            <fieldset className="box-fieldset">
              <label>
                Size (SqFt):<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="size_sqft"
                value={form.size_sqft}
                onChange={handleChange}
              />
            </fieldset>

            <fieldset className="box-fieldset">
              <label>
                Land Area (SqFt):<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="land_area_sqft"
                value={form.land_area_sqft}
                onChange={handleChange}
              />
            </fieldset>

            <fieldset className="box-fieldset">
              <label>
                Property ID:<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="property_code"
                value={form.property_code}
                onChange={handleChange}
              />
            </fieldset>
          </div>

          <div className="box grid-layout-3 gap-30">
            <fieldset className="box-fieldset">
              <label>
                Rooms:<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="rooms"
                value={form.rooms}
                onChange={handleChange}
              />
            </fieldset>

            <fieldset className="box-fieldset">
              <label>
                Bedrooms:<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="bedrooms"
                value={form.bedrooms}
                onChange={handleChange}
              />
            </fieldset>

            <fieldset className="box-fieldset">
              <label>
                Bathrooms:<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="bathrooms"
                value={form.bathrooms}
                onChange={handleChange}
              />
            </fieldset>
          </div>

          <div className="box grid-layout-3 gap-30">
            <fieldset className="box-fieldset">
              <label>
                Garages:<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="garages"
                value={form.garages}
                onChange={handleChange}
              />
            </fieldset>

            <fieldset className="box-fieldset">
              <label>
                Garages Size (SqFt):<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="garages_size_sqft"
                value={form.garages_size_sqft}
                onChange={handleChange}
              />
            </fieldset>

            <fieldset className="box-fieldset">
              <label>
                Year Built:<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="year_built"
                value={form.year_built}
                onChange={handleChange}
              />
            </fieldset>
          </div>

          <div className="box grid-layout-3 gap-30">
  <fieldset className="box-fieldset">
    <label>
      City:<span>*</span>
    </label>
    <input
      type="text"
      className="form-control"
      name="city"
      value={form.city}
      onChange={handleChange}
      placeholder="Enter city"
    />
  </fieldset>

  <fieldset className="box-fieldset">
    <label>
      Developer Name:<span>*</span>
    </label>
    <input
      type="text"
      className="form-control"
      name="developer_name"
      value={form.developer_name}
      onChange={handleChange}
      placeholder="Enter developer name"
    />
  </fieldset>

  <fieldset className="box-fieldset">
    <label>Short Location:</label>
    <input
      type="text"
      className="form-control"
      name="short_location"
      value={form.short_location}
      onChange={handleChange}
      placeholder="Example: Badlapur East, Thane"
    />
  </fieldset>
</div>

<div className="box grid-layout-2 gap-30">
  <fieldset className="box-fieldset">
    <label>Carpet Area:</label>
    <input
      type="text"
      className="form-control"
      name="carpet_area"
      value={form.carpet_area}
      onChange={handleChange}
      placeholder="Example: 313 - 412 sq.ft."
    />
  </fieldset>

  <fieldset className="box-fieldset">
    <label>Possession Date:</label>
    <input
      type="text"
      className="form-control"
      name="possession_date"
      value={form.possession_date}
      onChange={handleChange}
      placeholder="Example: 31 Mar 2024"
    />
  </fieldset>
</div>
        </div>

        <div className="widget-box-2 mb-20">
          <h5 className="title">
            Amenities<span>*</span>
          </h5>

          <div className="box-amenities-property">
            {Object.entries(AMENITY_GROUPS).map(([group, items]) => (
              <div className="box-amenities" key={group}>
                <div className="title-amenities fw-6 text-color-heading text-1">
                  {group}
                </div>
                <div className="list-amenities">
                  {items.map((item) => (
                    <fieldset className="checkbox-item style-1" key={item}>
                      <label>
                        <span className="text-4">{item}</span>
                        <input
                          type="checkbox"
                          checked={amenities.includes(item)}
                          onChange={() => toggleAmenity(item)}
                        />
                        <span className="btn-checkbox" />
                      </label>
                    </fieldset>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="widget-box-2 mb-20">
          <h3 className="title">Virtual Tour 360</h3>

          <div className="box-radio-check">
            <div className="text-btn mb-16">Virtual Tour Type:</div>

            <fieldset className="radio-item">
              <label>
                <span className="text-1">Embedded code</span>
                <input
                  type="radio"
                  name="virtual_tour_type"
                  value="embedded"
                  checked={form.virtual_tour_type === "embedded"}
                  onChange={handleChange}
                />
                <span className="btn-radio" />
              </label>
            </fieldset>

            <fieldset className="radio-item style-1">
              <label>
                <span className="text-1">Upload image</span>
                <input
                  type="radio"
                  name="virtual_tour_type"
                  value="image"
                  checked={form.virtual_tour_type === "image"}
                  onChange={handleChange}
                />
                <span className="btn-radio" />
              </label>
            </fieldset>

            <fieldset className="box-fieldset">
              <label>Embedded Code Virtual 360</label>
              <textarea
                className="textarea"
                name="virtual_tour_embed_code"
                value={form.virtual_tour_embed_code}
                onChange={handleChange}
                placeholder="Paste embedded code here"
              />
            </fieldset>
          </div>
        </div>

        <div className="widget-box-2 mb-20">
          <h3 className="title">Videos</h3>
          <fieldset className="box-fieldset">
            <label className="text-btn">Video URL:</label>
            <input
              type="text"
              className="form-control"
              name="video_url"
              value={form.video_url}
              onChange={handleChange}
              placeholder="Youtube / Vimeo URL"
            />
          </fieldset>
        </div>

        <div className="widget-box-2 mb-20">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "15px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <h3 className="title">Property Floor Plans</h3>
            <button
              type="button"
              className="tf-btn bg-color-primary pd-10"
              onClick={addFloorPlan}
            >
              Add Floor Plan
            </button>
          </div>

          {floorPlans.map((plan, index) => (
            <div className="box-floor-property file-delete" key={index}>
              <div className="top d-flex justify-content-between align-items-center">
                <h6>{plan.floor_name || `Floor ${index + 1}`}</h6>
                {floorPlans.length > 1 && (
                  <button
                    type="button"
                    className="remove-file"
                    onClick={() => removeFloorPlan(index)}
                    style={{
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                    }}
                  >
                    <span className="icon icon-close" />
                  </button>
                )}
              </div>

              <div className="box box-fieldset">
                <label>Floor Name:</label>
                <input
                  type="text"
                  className="form-control"
                  value={plan.floor_name}
                  onChange={(e) =>
                    updateFloorPlan(index, "floor_name", e.target.value)
                  }
                  placeholder="Floor 1"
                />
              </div>

              <div className="grid-layout-2 box gap-30">
                <fieldset className="box-fieldset">
                  <label>Floor Price:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={plan.floor_price}
                    onChange={(e) =>
                      updateFloorPlan(index, "floor_price", e.target.value)
                    }
                  />
                </fieldset>

                <fieldset className="box-fieldset">
                  <label>Price Postfix:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={plan.price_postfix}
                    onChange={(e) =>
                      updateFloorPlan(index, "price_postfix", e.target.value)
                    }
                    placeholder="INR"
                  />
                </fieldset>
              </div>

              <div className="grid-layout-2 box gap-30">
                <fieldset className="box-fieldset">
                  <label>Floor Size:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={plan.floor_size}
                    onChange={(e) =>
                      updateFloorPlan(index, "floor_size", e.target.value)
                    }
                  />
                </fieldset>

                <fieldset className="box-fieldset">
                  <label>Size Postfix:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={plan.size_postfix}
                    onChange={(e) =>
                      updateFloorPlan(index, "size_postfix", e.target.value)
                    }
                    placeholder="SqFt"
                  />
                </fieldset>
              </div>

              <div className="grid-layout-2 box gap-30">
                <fieldset className="box-fieldset">
                  <label>Bedrooms:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={plan.bedrooms}
                    onChange={(e) =>
                      updateFloorPlan(index, "bedrooms", e.target.value)
                    }
                  />
                </fieldset>

                <fieldset className="box-fieldset">
                  <label>Bathrooms:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={plan.bathrooms}
                    onChange={(e) =>
                      updateFloorPlan(index, "bathrooms", e.target.value)
                    }
                  />
                </fieldset>
              </div>

              <div className="grid-layout-2 box gap-30">
                <fieldset className="box-fieldset">
                  <label>Floor Image:</label>
                  <div className="box-floor-img uploadfile">
                    <label className="btn-upload tf-btn bg-color-primary pd-10">
                      Choose File
                      <input
                        type="file"
                        className="ip-file"
                        accept="image/*"
                        onChange={(e) =>
                          updateFloorPlanImage(index, e.target.files?.[0] || null)
                        }
                      />
                    </label>
                    <p className="file-name">Or drop file here to upload</p>

                    {plan.floor_image_preview && (
                      <div style={{ marginTop: "12px" }}>
                        <Image
                          src={plan.floor_image_preview}
                          alt="floor-preview"
                          width={300}
                          height={180}
                        />
                      </div>
                    )}
                  </div>
                </fieldset>

                <fieldset className="box-fieldset">
                  <label>Description:</label>
                  <textarea
                    className="textarea"
                    value={plan.description}
                    onChange={(e) =>
                      updateFloorPlan(index, "description", e.target.value)
                    }
                    placeholder="Floor description"
                  />
                </fieldset>
              </div>
            </div>
          ))}
        </div>

        <div className="box-btn">
          <button
            type="button"
            className="tf-btn bg-color-primary pd-13"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading
              ? isEditMode
                ? "Updating..."
                : "Adding..."
              : isEditMode
              ? "Update Property"
              : "Add Property"}
          </button>

          <button
            type="button"
            className="tf-btn style-border pd-10"
            onClick={loadExampleData}
          >
            Save & Preview Example
          </button>
        </div>

        <div className="footer-dashboard">
          <p>Copyright © {new Date().getFullYear()} GROWL Real Estate</p>
          <ul className="list">
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="overlay-dashboard" />
    </div>
  );
}