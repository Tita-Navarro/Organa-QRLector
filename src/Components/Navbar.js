import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div>
               <nav class="navbar navbar-dark bg-primary">
                    <Link to ='/' class="navbar-brand">
                        <img src="https://lh3.googleusercontent.com/hUEkGansz-JtKgLYUesS7JImLtb7qFFOfO2ok7dIRohrCwGvFH9C2pSqre50tcNgeBN12KWXKLO_U0OUc_mFBiEVkkvKcP-KOny5LUDixFAmOyRDEFy35py_7Ph7H2ymH0AaljP18bku1vn1hPmzKVx-zicf7mOC8rpqNGuOPir0YZ4hmJO-IHGnAdM8JL2jnIR9F2RgQ-TgV1DOCb49DvAepJVUCJzARtrLJZaCtnBcH9sFEijckKQ3TLxg0qBT-Ir12UN86eEReqaoBDq-pYiDwEw8XRvCekOIKjRzz2zlXbcEMebTLWyp4vklun41Av-fpvlSh_dXzfdsRvB-Ox7Vr1A_jMwxpOHkWQwLQ6qhkWaHRU5nlusPEOOUDLp0wbwQ51R7d61dVnKHET5zvs2g4fHVK2AaD2rADhIq_7hrAsrrvxJQ9ZvPivhpNWcwVlm9VE7tMgG7jsFzdm0NOgkp1-e48XeopGuk-uCFUpEZVhfGw0bV_mT7TAmD84MByMMJ5RtSqzlGkXw9B35vnshbm8WQiVteJcMR55Fuf33lF1vh97b01kUon7y6cyegMRExs9gZJAiMvnGud382ic09H5uScO2JAQDLi4hQU6ilmLoaVIit3gav7_vweitvK0GK_IkK1ZoU6090Ch2UPe7K=s200-no" width="30" height="30" class="d-inline-block align-top" alt=""></img>
                        Menu
                     </Link> 
                     <Link to='/details'>
                     <button type="button" class="btn btn-secondary btn-lg" >Cocina</button>
                     </Link>               
                </nav>
            </div>
        )
    }
}
export default Navbar;