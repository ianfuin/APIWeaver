export interface uploadFile {url: '/pet/{petId}/uploadImage'; method: 'post';headers: { 'Content-Type': 'multipart/form-data'; };body?:{,additionalMetadata,?,:,string,;
file,?,:,File,;,};
path?:{,petId,,:,number,;,};
response?:any; }
export interface addPet {url: '/pet'; method: 'post';headers: { 'Content-Type': 'application/json'; };/** Pet object that needs to be added to the store */
body?:Pet;
response?:any; }
export interface updatePet {url: '/pet'; method: 'put';headers: { 'Content-Type': 'application/json'; };/** Pet object that needs to be added to the store */
body?:Pet;
response?:any; }
export interface findPetsByStatus {url: '/pet/findByStatus'; method: 'get';headers: { 'Content-Type': 'application/json'; }; }
export interface findPetsByTags {url: '/pet/findByTags'; method: 'get';headers: { 'Content-Type': 'application/json'; }; }
export interface getPetById {url: '/pet/{petId}'; method: 'get';headers: { 'Content-Type': 'application/json'; }; }
export interface updatePetWithForm {url: '/pet/{petId}'; method: 'post';headers: { 'Content-Type': 'application/x-www-form-urlencoded'; };body?:{,name,?,:,string,;
status,?,:,string,;,};
path?:{,petId,,:,number,;,};
response?:any; }
export interface deletePet {url: '/pet/{petId}'; method: 'delete';headers: { 'Content-Type': 'application/json'; }; }
export interface placeOrder {url: '/store/order'; method: 'post';headers: { 'Content-Type': 'application/json'; };/** order placed for purchasing the pet */
body?:Order;
response?:Order; }
export interface getOrderById {url: '/store/order/{orderId}'; method: 'get';headers: { 'Content-Type': 'application/json'; }; }
export interface deleteOrder {url: '/store/order/{orderId}'; method: 'delete';headers: { 'Content-Type': 'application/json'; }; }
export interface getInventory {url: '/store/inventory'; method: 'get';headers: { 'Content-Type': 'application/json'; }; }
export interface createUsersWithArrayInput {url: '/user/createWithArray'; method: 'post';headers: { 'Content-Type': 'application/json'; };/** List of user object */
body?:Array<User>;
response?:any; }
export interface createUsersWithListInput {url: '/user/createWithList'; method: 'post';headers: { 'Content-Type': 'application/json'; };/** List of user object */
body?:Array<User>;
response?:any; }
export interface getUserByName {url: '/user/{username}'; method: 'get';headers: { 'Content-Type': 'application/json'; }; }
export interface updateUser {url: '/user/{username}'; method: 'put';headers: { 'Content-Type': 'application/json'; };/** Updated user object */
body?:User;
path?:{,username,,:,string,;,};
response?:any; }
export interface deleteUser {url: '/user/{username}'; method: 'delete';headers: { 'Content-Type': 'application/json'; }; }
export interface loginUser {url: '/user/login'; method: 'get';headers: { 'Content-Type': 'application/json'; }; }
export interface logoutUser {url: '/user/logout'; method: 'get';headers: { 'Content-Type': 'application/json'; }; }
export interface createUser {url: '/user'; method: 'post';headers: { 'Content-Type': 'application/json'; };/** Created user object */
body?:User;
response?:any; }