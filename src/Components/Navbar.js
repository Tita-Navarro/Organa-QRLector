import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Time from './Time';


class Navbar extends Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-dark bg">
                    <Link to='/' className="navbar-brand">
                        <img className='home' src="https://lh3.googleusercontent.com/oH2RckQ3nS6kUvyvEfDw66dwwvybKwpqDwev3WS97NEhZTPKPKRYyfU84zPS34RW20bPjLsGqmTOBdW-z_tkgOmQGgTzyI3KeznDouumvv43ToThhZIIVqIpJ9k2hzqHVVfVrQzUX-UEx3fVXaikvqzkM1ovXFTu4ItlCustG-OCX_0DQbbG3wSgW7dMKwbCr1Uf3eKXoOj1NjyIrLE-YxGMgDZ_Ww7KA-LXxqSE7WoNd7IEMAH8e3XAdKTSPL5fdeH_xlwC2anO8zrEyB4xGhIAd3DzfylS0jFa8MOc34zwiCPTHTo4Hb_O5uN5dKZGkzf3hTALYlwcCMSgMHDBmO4sdvxOYjsZd5xFQJ4BjD_NLegyFFXBAua41VOjdPLlrtxP-CYgCXhKluU88Sx6S2e54RlcTz3LZVuG5K5ZI06A5ntjBsHxpb65Mm6VLuuHqf1-WT8pSIwxQ9T6H8efZ9yPZ9Ioe7D7gwL6awjpqzYPq529grkyhq8Nlgfl5edfBtw4qOW8s8r3ujfLKUSHQOx3Kz0PjbILt-n9dV83IJzYEr6o65hmB03IURDCpq0_Q_B3gADGK2dqvr9WJKJ86Yv1P7wXHTRgRlQ0A7tKnqG45rLaYCESFMr2ohM84H0IOo62MzV3mXwF1JfxgiN43C6XAakDEIk2gUiAxq7SNn8tWKJfJ3mhlx7LBmLDiig_U0k-PWyGH0Zs3tbZ4Q=s512-no" alt=""></img>
                    </Link>
                    <Time />
                    <Link to='/details'>
                        <button type="button" className="btn btn-dark btn-lg" >Detalles</button>
                    </Link>
                </nav>
            </div>
        )
    }
}
export default Navbar;