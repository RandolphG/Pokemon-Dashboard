import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap");
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  html {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  body {
    width: 100%;
    height: 100%;
    font-family: "DM Sans", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    overflow-x: hidden;
    background-image: linear-gradient(to bottom, #9FA6B0 0%, #8A8E97 20%,#676A6F 40%,#4B4E53 60%,#2E3136 100%);
    background-position: center;
    background-size: cover;
    padding: 20px;
  }

  :root {
    --dark-font: #0f0f10;
    --light-font: #79798c;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  .app-container {
    position: relative;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    max-width: 1100px;
    max-height: 800px;
    background: linear-gradient(180deg, #e0e9fd 0%, #e9ecf1 90%);
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.4);
    display: flex;
    overflow: hidden;
  }

  .left-area {
    padding: 32px;
    flex-basis:  132px;
    background-color: rgba(255, 255, 255, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 300ms cubic-bezier(0.19, 1, 0.56, 1);
    position: relative;
    overflow: auto;
  }
  .left-area.show {
    transform: translateX(0);
    opacity: 1;
  }

  .app-name {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: var(--dark-font);
    margin-bottom: 32px;
  }

  .item-link {
    color: var(--light-font);
    margin-bottom: 32px;
    transition: 0.2s;
  }
  .item-link.active {
    color: var(--dark-font);
  }

  .btn-logout {
    border: none;
    background-color: transparent;
    color: var(--light-font);
    margin-top: auto;
    cursor: pointer;
    transition: 0.2s;
  }
  .btn-logout:hover {
    color: var(--dark-font);
  }

  .main-area {
    flex: 1;
    height: 100%;
    overflow-y: auto;
    background: linear-gradient(97deg, #f2f7fd 0%, #f0f4fd 90%);
    border-radius: 0 10px 10px 0;
    padding-bottom: 24px;
    position: relative;
  }

  .main-area-header {
    padding: 24px 40px;
    background: linear-gradient(97deg, #f2f7fd 0%, #f0f4fd 90%);
  }

  .search-wrapper {
    border-radius: 4px;
    background-color: #fff;
    padding-right: 12px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--light-font);
    box-shadow: 0 2px 6px 0 rgba(136, 148, 171, 0.2), 0 24px 20px -24px rgba(71, 82, 107, 0.1);
    overflow: hidden;
  }

  .search-input {
    border: none;
    flex: 1;
    outline: none;
    height: 100%;
    padding: 0 12px;
    font-size: 12px;
  }

  .right-area {
    flex-basis: 300px;
    flex-grow: 0;
    background: linear-gradient(180deg, #e0e9fd 0%, #e9ecf1 90%);
    transition: all 300ms cubic-bezier(0.19, 1, 0.56, 1);
  }
  .right-area.show {
    transform: translateX(150px);
    width: 100%;
    opacity: 1;
  }

  .content-section {
    height: 30vh;
    display: block;
    margin-top: 10px;
    overflow-x: hidden;
    padding: 0 40px;
  }

  .section-header {
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 16px;
  }
  .section-header-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .section-header-link {
    display: block;
    font-size: 12px;
    line-height: 16px;
    color: #8683d6;
  }

  .access-links {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 -8px;
  }

  .access-icon {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    padding: 20px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .access-icon svg {
    width: 36px;
    height: 36px;
  }

  .access-link-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 8px;
  }
  .access-link-wrapper:nth-child(1) .access-icon {
    background-color: #6166fe;
  }
  .access-link-wrapper:nth-child(2) .access-icon {
    background-color: #6166fe;
  }
  .access-link-wrapper:nth-child(3) .access-icon {
    background-color: #3275f7;
  }

  .access-text {
    color: var(--light-font);
    font-size: 12px;
    line-height: 24px;
  }

  .content-section-line,
  .content-part-line {
    display: flex;
    justify-content: space-between;
  }

  .content-part-line {
    height: 100%;
  }

  .content-section-line {
    margin: 0 -8px;
  }

  .section-part {
    flex-basis: 49%;
  }

  .image-wrapper {
    border-radius: 12px;
    overflow: hidden;
    width: 100%;
    height: auto;
    position: relative;
    flex-basis: 48%;
    display: flex;
  }
  .image-wrapper img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    transition: 0.2s ease-in;
  }
  .image-wrapper:hover img {
    transform: scale(1.125);
  }

  .image-overlay {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 16, 34, 0.8) 0%, rgba(240, 244, 253, 0.2) 90%);
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
  }

  .video-info-text {
    width: calc(100% - 40px);
  }
  .video-info-text p {
    margin: 0;
  }

  .video-name, .video-subtext {
    color: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .video-name.medium, .video-subtext.medium {
    font-size: 14px;
    line-height: 24px;
  }
  .video-name.tiny, .video-subtext.tiny {
    font-size: 12px;
    line-height: 16px;
  }

  .video-info {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .video-subtext {
    opacity: 0.8;
  }

  .files-table {
    background-color: #fff;
    box-shadow: 0 2px 6px 0 rgba(136, 148, 171, 0.2), 0 24px 20px -24px rgba(71, 82, 107, 0.1);
    border-radius: 12px;
    padding: 12px;
    display: table;
    table-layout: auto;
    width: 100%;
    height: 300px;
    overflow: hidden;
  }
  .files-table-header {
    display: table-header-group;
  }
  .files-table-row {
    display: table-row-group;
  }

  .table-cell {
    display: table-cell;
    font-size: 12px;
    line-height: 16px;
    color: #000;
    padding: 8px;
  }

  .column-header {
    font-size: 12px;
    line-height: 16px;
    color: #888da9;
  }

  .name-cell {
    width: 48%;
    word-break: break-all;
  }
  .name-cell.pdf:before {
    content: "PDF";
    background-color: #e2e9f8;
    color: #5a8ff7;
  }
  .name-cell.jpg:before {
    content: "JPG";
    background-color: #e4e2f1;
    color: #302d7d;
  }
  .name-cell:before {
    border-radius: 4px;
    font-size: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 11px;
  }

  .size-cell {
    width: 20%;
  }

  .more-action {
    border: none;
    background-color: transparent;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='%23888da9' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' class='feather feather-more-horizontal' viewBox='0 0 24 24'%3E%3Cdefs/%3E%3Ccircle cx='12' cy='12' r='1'/%3E%3Ccircle cx='19' cy='12' r='1'/%3E%3Ccircle cx='5' cy='12' r='1'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: 24px;
    height: 16px;
    outline: none;
    cursor: pointer;
  }

  .fixed.main-area-header {
    position: -webkit-sticky;
    position: sticky;
    z-index: 2;
    top: 0;
    width: 100%;
    padding: 12px 40px;
    transition: 0.2s;
    -webkit-animation: sticky 0.5s forwards;
    animation: sticky 0.5s forwards;
  }

  @-webkit-keyframes sticky {
    0% {
      transform: translatey(-88px);
    }
    100% {
      transform: translatey(0px);
    }
  }

  @keyframes sticky {
    0% {
      transform: translatey(-88px);
    }
    100% {
      transform: translatey(0px);
    }
  }
  .video-time {
    position: absolute;
    z-index: 1;
    border-radius: 10px;
    padding: 4px 12px;
    background-color: rgba(139, 156, 163, 0.5);
    font-size: 10px;
    right: 12px;
    top: 12px;
    color: #fff;
  }

  .btn-play {
    border-radius: 50%;
    background-color: #fff;
    border: none;
    box-shadow: 0 2px 6px 0 rgba(136, 148, 171, 0.2), 0 24px 20px -24px rgba(71, 82, 107, 0.1);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='%2322244a' stroke='%2322244a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-play'%3E%3Cpolygon points='5 3 19 12 5 21 5 3'/%3E%3C/svg%3E");
    background-position: center;
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
  }

  .right-area {
    padding: 24px;
    overflow: auto;
  }

  .right-area-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    //background: blueviolet;
  }
  .right-area-header .more-action {
    width: 24px;
    height: 24px;
  }
 .right-area-title{
   color: black;
   font-size: 1.5rem;
   font-weight: bold;
  }

  .download-item-line {
    padding: 12px 0;
  }

  .line-header {
    font-size: 12px;
    line-height: 16px;
    color: #888da9;
  }


  .received-item-line {
    //background: blueviolet;
    height: 150px;
    width: 100%;
    padding-top: 1vh;
    display: flex;
    padding-left: 4px;
  }


  .received-items-content {
    padding: 10px 10px;
  }

  .received-files {
    display: flex;
    height: 70%;
  }
  .received-files .image-wrapper {
    margin-left: 6px;
    display: flex;
  }

  .received-files-info {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    line-height: 16px;
    margin-left: 12px;
    margin-top: 12px;
  }


  .subtitle  {
    color: #7a8dc5;
    display: flex;
    flex-direction: column;
    font-weight: bold;
  }

  .stats-info-list span {
    display: flex;
    flex-direction: column;
  }
  .basic-info-list span {
    display: flex;
    flex-direction: column;
  }


  .btn-show-left-area,
  .btn-show-right-area {
    position: absolute;
    top: 24px;
    width: 32px;
    height: 40px;
    border-radius: 4px;
    background-color: #fff;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    cursor: pointer;
    display: none;
  }

  .btn-show-left-area {
    left: 0;
    border-radius: 0 4px 4px 0;
  }

  .btn-show-right-area {
    right: 0;
    border-radius: 4px 0 0 4px;
  }

  .btn-close-left{
    border: none;
    background-color: transparent;
    position: absolute;
    top: 4px;
    right: 4px;
    color: var(--light-font);
    outline: none;
    cursor: pointer;
    display: none;
  }

  .btn-close-right {
    border: none;
    background-color: transparent;
    position: absolute;
    top: 4px;
    right: 140px;
    color: var(--light-font);
    outline: none;
    cursor: pointer;
    display: none;
  }


  .show .btn-close-left,
  .show .btn-close-right {
    display: block;
  }

  @media screen and (min-width: 600px) and (max-width: 700px) {
    .access-icon {
      padding: 16px;
    }

    .access-icon svg {
      width: 20px;
      height: 20px;
    }
  }

  @media screen and (min-width: 900px) and (max-width: 1200px) {
    .right-area{
      display: flex;
      flex-direction: column;
      //background: aqua;
    }
    
    .right-area-title{
      background: white;
      padding: 0 8px;
      border-radius: 5px;
    }

    .pokemon-detail-container{
      //background: coral;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: flex-start;
      align-items: center;
    }

    .elements{
      position: relative;
      //background: darkblue;
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      justify-content: flex-start;
      align-items: center;
      padding: 0 2vw;
    }


    .received-files-info{
      //background: white;
      position: absolute;
      top: 20vh;
      left: 2vw;
      width: 20vw;
      height: 42vh;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      
      font-size: 16px;
   }
    .profile{
      //background: darkslateblue;
      display: flex;
      flex-direction: column !important;
      justify-content: flex-start;
      align-items: flex-start;
    }

      
    
    .basic-info-list{
      //background:yellow;
      width: 16vw;
      display: flex;
      flex-direction: column !important;
      margin-bottom: 1vh;
      line-height: 1.2rem;
    }
    
    .character-info{
      display: flex;
      //background: blue;
      flex-direction: row;
      justify-content: space-between;
      padding-left: 8px;
      width: 16vw;
    }
    
    .stats-info-list{
      //background: seagreen;
      display: flex;
      width: 16vw;
      flex-direction: column !important;
      margin-bottom: 1vh;
    }
    
    
    .attributes{
      //background: brown;
      display: flex;
      flex-direction: column !important;
      justify-content: flex-start;
      align-items: flex-start;
    }
      
    .abilities-info-list{
      //background:blueviolet;
      display: flex;
      width: 16vw;
      flex-direction: column !important;
      margin-bottom: 1vh;
    }
    
    .types-info-list{
      //background: chocolate;
      display: flex;
      width: 16vw;
      flex-direction: column !important;
    }
  }
  
  @media screen and (max-width: 1000px) {
    .right-area {
      transform: translateX(200%);
      position: absolute;
      opacity: 0;
      z-index: 2;
      height: 100%;
      box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.4);
    }

    .btn-show-right-area {
      display: flex;
    }

    .access-icon svg {
      width: 36px;
      height: 36px;
    }

    .pokemon-detail-container{
      //background: coral;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: flex-start;
      align-items: center;
    }

    .elements{
      position: relative;
      //background: darkblue;
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      justify-content: flex-start;
      align-items: center;
      padding: 0 2vw;
    }


    .received-files-info{
      //background: white;
      position: absolute;
      top: 20vh;
      left: 2vw;
      width: 20vw;
      height: 42vh;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      font-size: 16px;
    }
    .profile{
      //background: darkslateblue;
      display: flex;
      flex-direction: column !important;
      justify-content: flex-start;
      align-items: flex-start;
    }



    .basic-info-list{
      //background:yellow;
      width: 16vw;
      display: flex;
      flex-direction: column !important;
      margin-bottom: 1vh;
      line-height: 1.2rem;
    }

    .character-info{
      display: flex;
      //background: blue;
      flex-direction: row;
      justify-content: space-between;
      padding-left: 8px;
      width: 16vw;
    }

    .stats-info-list{
      //background: seagreen;
      display: flex;
      width: 16vw;
      flex-direction: column !important;
      margin-bottom: 1vh;
    }


    .attributes{
      //background: brown;
      display: flex;
      flex-direction: column !important;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .abilities-info-list{
      //background:blueviolet;
      display: flex;
      width: 16vw;
      flex-direction: column !important;
      margin-bottom: 1vh;
    }

    .types-info-list{
      //background: chocolate;
      display: flex;
      width: 16vw;
      flex-direction: column !important;
    }
  }
  
  @media screen and (max-width: 768px) {
    .left-area {
      transform: translateX(-100%);
      opacity: 0;
      position: absolute;
      z-index: 2;
      height: 100%;
      background-color: #fff;
      background-image: none;
      box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.4);
    }

    .btn-show-left-area {
      display: flex;
    }

    .content-section-line,
    .content-part-line {
      flex-direction: column;
    }

    .image-wrapper {
      margin: 10px 0;
    }

    .video-name.tiny, .video-subtext.tiny {
      font-size: 16px;
      line-height: 24px;
    }

    .access-link-wrapper {
      width: 33.3%;
    }

    .pokemon-detail-container{
      //background: coral;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: flex-start;
      align-items: center;
    }

    .elements{
      position: relative;
      //background: darkblue;
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      justify-content: flex-start;
      align-items: center;
      padding: 0 2vw;
    }


    .received-files-info{
      //background: white;
      position: absolute;
      top: 20vh;
      left: 2vw;
      width: 20vw;
      height: 42vh;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      font-size: 16px;
    }
    .profile{
      //background: darkslateblue;
      display: flex;
      flex-direction: column !important;
      justify-content: flex-start;
      align-items: flex-start;
    }



    .basic-info-list{
      //background:yellow;
      width: 16vw;
      display: flex;
      flex-direction: column !important;
      margin-bottom: 1vh;
      line-height: 1.2rem;
    }

    .character-info{
      display: flex;
      //background: blue;
      flex-direction: row;
      justify-content: space-between;
      padding-left: 8px;
      width: 16vw;
    }

    .stats-info-list{
      //background: seagreen;
      display: flex;
      width: 16vw;
      flex-direction: column !important;
      margin-bottom: 1vh;
    }


    .attributes{
      //background: brown;
      display: flex;
      flex-direction: column !important;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .abilities-info-list{
      //background:blueviolet;
      display: flex;
      width: 16vw;
      flex-direction: column !important;
      margin-bottom: 1vh;
    }

    .types-info-list{
      //background: chocolate;
      display: flex;
      width: 16vw;
      flex-direction: column !important;
    }
  }
  @media screen and (max-width: 520px) {
    body {
      padding: 0;
    }

    .app-container {
      border-radius: 0;
    }

    .content-section {
      padding: 0 20px;
    }

    .content-section-line {
      margin: 0;
    }
  }
`;

export default GlobalStyle;
