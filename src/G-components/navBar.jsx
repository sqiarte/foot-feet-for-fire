import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();
  // ถ้ากด logout จะ remove token
  const handleLogout = async () => {
    await localStorage.removeItem("token");
    await window.location.reload();
    await navigate("/");
  }

  return (
    <AppBar position='static' className='h-14 mb-1 bg-slate-50 shadow-md'>
      <Container maxWidth='xl' className=''>
        <Toolbar disableGutters className='flex justify-between'>
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/dashboard'
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {/*รูป Foot-Feet-For-Fire */}
            <svg
              width='220'
              height='26'
              viewBox='0 0 242 26'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7.85938 25H3.32812V6.59375C3.32812 5.3125 3.57812 4.23438 4.07812 3.35938C4.58854 2.47396 5.30208 1.80729 6.21875 1.35938C7.14583 0.901042 8.24479 0.671875 9.51562 0.671875C9.93229 0.671875 10.3333 0.703125 10.7188 0.765625C11.1042 0.817708 11.4792 0.885417 11.8438 0.96875L11.7969 4.35938C11.599 4.30729 11.3906 4.27083 11.1719 4.25C10.9531 4.22917 10.6979 4.21875 10.4062 4.21875C9.86458 4.21875 9.40104 4.3125 9.01562 4.5C8.64062 4.67708 8.35417 4.94271 8.15625 5.29688C7.95833 5.65104 7.85938 6.08333 7.85938 6.59375V25ZM11.2344 8.09375V11.2812H0.8125V8.09375H11.2344ZM12.875 16.7188V16.3906C12.875 15.151 13.0521 14.0104 13.4062 12.9688C13.7604 11.9167 14.276 11.0052 14.9531 10.2344C15.6302 9.46354 16.4635 8.86458 17.4531 8.4375C18.4427 8 19.5781 7.78125 20.8594 7.78125C22.1406 7.78125 23.2812 8 24.2812 8.4375C25.2812 8.86458 26.1198 9.46354 26.7969 10.2344C27.4844 11.0052 28.0052 11.9167 28.3594 12.9688C28.7135 14.0104 28.8906 15.151 28.8906 16.3906V16.7188C28.8906 17.9479 28.7135 19.0885 28.3594 20.1406C28.0052 21.1823 27.4844 22.0938 26.7969 22.875C26.1198 23.6458 25.2865 24.2448 24.2969 24.6719C23.3073 25.099 22.1719 25.3125 20.8906 25.3125C19.6094 25.3125 18.4688 25.099 17.4688 24.6719C16.4792 24.2448 15.6406 23.6458 14.9531 22.875C14.276 22.0938 13.7604 21.1823 13.4062 20.1406C13.0521 19.0885 12.875 17.9479 12.875 16.7188ZM17.375 16.3906V16.7188C17.375 17.4271 17.4375 18.0885 17.5625 18.7031C17.6875 19.3177 17.8854 19.8594 18.1562 20.3281C18.4375 20.7865 18.8021 21.1458 19.25 21.4062C19.6979 21.6667 20.2448 21.7969 20.8906 21.7969C21.5156 21.7969 22.0521 21.6667 22.5 21.4062C22.9479 21.1458 23.3073 20.7865 23.5781 20.3281C23.849 19.8594 24.0469 19.3177 24.1719 18.7031C24.3073 18.0885 24.375 17.4271 24.375 16.7188V16.3906C24.375 15.7031 24.3073 15.0573 24.1719 14.4531C24.0469 13.8385 23.8438 13.2969 23.5625 12.8281C23.2917 12.349 22.9323 11.974 22.4844 11.7031C22.0365 11.4323 21.4948 11.2969 20.8594 11.2969C20.224 11.2969 19.6823 11.4323 19.2344 11.7031C18.7969 11.974 18.4375 12.349 18.1562 12.8281C17.8854 13.2969 17.6875 13.8385 17.5625 14.4531C17.4375 15.0573 17.375 15.7031 17.375 16.3906ZM30.9375 16.7188V16.3906C30.9375 15.151 31.1146 14.0104 31.4688 12.9688C31.8229 11.9167 32.3385 11.0052 33.0156 10.2344C33.6927 9.46354 34.526 8.86458 35.5156 8.4375C36.5052 8 37.6406 7.78125 38.9219 7.78125C40.2031 7.78125 41.3438 8 42.3438 8.4375C43.3438 8.86458 44.1823 9.46354 44.8594 10.2344C45.5469 11.0052 46.0677 11.9167 46.4219 12.9688C46.776 14.0104 46.9531 15.151 46.9531 16.3906V16.7188C46.9531 17.9479 46.776 19.0885 46.4219 20.1406C46.0677 21.1823 45.5469 22.0938 44.8594 22.875C44.1823 23.6458 43.349 24.2448 42.3594 24.6719C41.3698 25.099 40.2344 25.3125 38.9531 25.3125C37.6719 25.3125 36.5312 25.099 35.5312 24.6719C34.5417 24.2448 33.7031 23.6458 33.0156 22.875C32.3385 22.0938 31.8229 21.1823 31.4688 20.1406C31.1146 19.0885 30.9375 17.9479 30.9375 16.7188ZM35.4375 16.3906V16.7188C35.4375 17.4271 35.5 18.0885 35.625 18.7031C35.75 19.3177 35.9479 19.8594 36.2188 20.3281C36.5 20.7865 36.8646 21.1458 37.3125 21.4062C37.7604 21.6667 38.3073 21.7969 38.9531 21.7969C39.5781 21.7969 40.1146 21.6667 40.5625 21.4062C41.0104 21.1458 41.3698 20.7865 41.6406 20.3281C41.9115 19.8594 42.1094 19.3177 42.2344 18.7031C42.3698 18.0885 42.4375 17.4271 42.4375 16.7188V16.3906C42.4375 15.7031 42.3698 15.0573 42.2344 14.4531C42.1094 13.8385 41.9062 13.2969 41.625 12.8281C41.3542 12.349 40.9948 11.974 40.5469 11.7031C40.099 11.4323 39.5573 11.2969 38.9219 11.2969C38.2865 11.2969 37.7448 11.4323 37.2969 11.7031C36.8594 11.974 36.5 12.349 36.2188 12.8281C35.9479 13.2969 35.75 13.8385 35.625 14.4531C35.5 15.0573 35.4375 15.7031 35.4375 16.3906ZM58 8.09375V11.2812H48.1562V8.09375H58ZM50.5938 3.92188H55.0938V19.9062C55.0938 20.3958 55.1562 20.7708 55.2812 21.0312C55.4167 21.2917 55.6146 21.474 55.875 21.5781C56.1354 21.6719 56.4635 21.7188 56.8594 21.7188C57.1406 21.7188 57.3906 21.7083 57.6094 21.6875C57.8385 21.6562 58.0312 21.625 58.1875 21.5938L58.2031 24.9062C57.8177 25.0312 57.401 25.1302 56.9531 25.2031C56.5052 25.276 56.0104 25.3125 55.4688 25.3125C54.4792 25.3125 53.6146 25.151 52.875 24.8281C52.1458 24.4948 51.5833 23.9635 51.1875 23.2344C50.7917 22.5052 50.5938 21.5469 50.5938 20.3594V3.92188ZM69.4375 13.4688V17H60.6094V13.4688H69.4375ZM78.9219 25H74.3906V6.59375C74.3906 5.3125 74.6406 4.23438 75.1406 3.35938C75.651 2.47396 76.3646 1.80729 77.2812 1.35938C78.2083 0.901042 79.3073 0.671875 80.5781 0.671875C80.9948 0.671875 81.3958 0.703125 81.7812 0.765625C82.1667 0.817708 82.5417 0.885417 82.9062 0.96875L82.8594 4.35938C82.6615 4.30729 82.4531 4.27083 82.2344 4.25C82.0156 4.22917 81.7604 4.21875 81.4688 4.21875C80.9271 4.21875 80.4635 4.3125 80.0781 4.5C79.7031 4.67708 79.4167 4.94271 79.2188 5.29688C79.0208 5.65104 78.9219 6.08333 78.9219 6.59375V25ZM82.2969 8.09375V11.2812H71.875V8.09375H82.2969ZM92.0625 25.3125C90.75 25.3125 89.5729 25.1042 88.5312 24.6875C87.4896 24.2604 86.6042 23.6719 85.875 22.9219C85.1562 22.1719 84.6042 21.3021 84.2188 20.3125C83.8333 19.3125 83.6406 18.25 83.6406 17.125V16.5C83.6406 15.2188 83.8229 14.0469 84.1875 12.9844C84.5521 11.9219 85.0729 11 85.75 10.2188C86.4375 9.4375 87.2708 8.83854 88.25 8.42188C89.2292 7.99479 90.3333 7.78125 91.5625 7.78125C92.7604 7.78125 93.8229 7.97917 94.75 8.375C95.6771 8.77083 96.4531 9.33333 97.0781 10.0625C97.7135 10.7917 98.1927 11.6667 98.5156 12.6875C98.8385 13.6979 99 14.8229 99 16.0625V17.9375H85.5625V14.9375H94.5781V14.5938C94.5781 13.9688 94.4635 13.4115 94.2344 12.9219C94.0156 12.4219 93.6823 12.026 93.2344 11.7344C92.7865 11.4427 92.2135 11.2969 91.5156 11.2969C90.9219 11.2969 90.4115 11.4271 89.9844 11.6875C89.5573 11.9479 89.2083 12.3125 88.9375 12.7812C88.6771 13.25 88.4792 13.8021 88.3438 14.4375C88.2188 15.0625 88.1562 15.75 88.1562 16.5V17.125C88.1562 17.8021 88.25 18.4271 88.4375 19C88.6354 19.5729 88.9115 20.0677 89.2656 20.4844C89.6302 20.901 90.0677 21.224 90.5781 21.4531C91.099 21.6823 91.6875 21.7969 92.3438 21.7969C93.1562 21.7969 93.9115 21.6406 94.6094 21.3281C95.3177 21.0052 95.9271 20.5208 96.4375 19.875L98.625 22.25C98.2708 22.7604 97.7865 23.25 97.1719 23.7188C96.5677 24.1875 95.8385 24.5729 94.9844 24.875C94.1302 25.1667 93.1562 25.3125 92.0625 25.3125ZM109.344 25.3125C108.031 25.3125 106.854 25.1042 105.812 24.6875C104.771 24.2604 103.885 23.6719 103.156 22.9219C102.438 22.1719 101.885 21.3021 101.5 20.3125C101.115 19.3125 100.922 18.25 100.922 17.125V16.5C100.922 15.2188 101.104 14.0469 101.469 12.9844C101.833 11.9219 102.354 11 103.031 10.2188C103.719 9.4375 104.552 8.83854 105.531 8.42188C106.51 7.99479 107.615 7.78125 108.844 7.78125C110.042 7.78125 111.104 7.97917 112.031 8.375C112.958 8.77083 113.734 9.33333 114.359 10.0625C114.995 10.7917 115.474 11.6667 115.797 12.6875C116.12 13.6979 116.281 14.8229 116.281 16.0625V17.9375H102.844V14.9375H111.859V14.5938C111.859 13.9688 111.745 13.4115 111.516 12.9219C111.297 12.4219 110.964 12.026 110.516 11.7344C110.068 11.4427 109.495 11.2969 108.797 11.2969C108.203 11.2969 107.693 11.4271 107.266 11.6875C106.839 11.9479 106.49 12.3125 106.219 12.7812C105.958 13.25 105.76 13.8021 105.625 14.4375C105.5 15.0625 105.438 15.75 105.438 16.5V17.125C105.438 17.8021 105.531 18.4271 105.719 19C105.917 19.5729 106.193 20.0677 106.547 20.4844C106.911 20.901 107.349 21.224 107.859 21.4531C108.38 21.6823 108.969 21.7969 109.625 21.7969C110.438 21.7969 111.193 21.6406 111.891 21.3281C112.599 21.0052 113.208 20.5208 113.719 19.875L115.906 22.25C115.552 22.7604 115.068 23.25 114.453 23.7188C113.849 24.1875 113.12 24.5729 112.266 24.875C111.411 25.1667 110.438 25.3125 109.344 25.3125ZM127.125 8.09375V11.2812H117.281V8.09375H127.125ZM119.719 3.92188H124.219V19.9062C124.219 20.3958 124.281 20.7708 124.406 21.0312C124.542 21.2917 124.74 21.474 125 21.5781C125.26 21.6719 125.589 21.7188 125.984 21.7188C126.266 21.7188 126.516 21.7083 126.734 21.6875C126.964 21.6562 127.156 21.625 127.312 21.5938L127.328 24.9062C126.943 25.0312 126.526 25.1302 126.078 25.2031C125.63 25.276 125.135 25.3125 124.594 25.3125C123.604 25.3125 122.74 25.151 122 24.8281C121.271 24.4948 120.708 23.9635 120.312 23.2344C119.917 22.5052 119.719 21.5469 119.719 20.3594V3.92188Z'
                fill='black'
              />
              <path
                d='M138.562 13.4688V17H129.734V13.4688H138.562ZM148.047 25H143.516V6.59375C143.516 5.3125 143.766 4.23438 144.266 3.35938C144.776 2.47396 145.49 1.80729 146.406 1.35938C147.333 0.901042 148.432 0.671875 149.703 0.671875C150.12 0.671875 150.521 0.703125 150.906 0.765625C151.292 0.817708 151.667 0.885417 152.031 0.96875L151.984 4.35938C151.786 4.30729 151.578 4.27083 151.359 4.25C151.141 4.22917 150.885 4.21875 150.594 4.21875C150.052 4.21875 149.589 4.3125 149.203 4.5C148.828 4.67708 148.542 4.94271 148.344 5.29688C148.146 5.65104 148.047 6.08333 148.047 6.59375V25ZM151.422 8.09375V11.2812H141V8.09375H151.422ZM153.062 16.7188V16.3906C153.062 15.151 153.24 14.0104 153.594 12.9688C153.948 11.9167 154.464 11.0052 155.141 10.2344C155.818 9.46354 156.651 8.86458 157.641 8.4375C158.63 8 159.766 7.78125 161.047 7.78125C162.328 7.78125 163.469 8 164.469 8.4375C165.469 8.86458 166.307 9.46354 166.984 10.2344C167.672 11.0052 168.193 11.9167 168.547 12.9688C168.901 14.0104 169.078 15.151 169.078 16.3906V16.7188C169.078 17.9479 168.901 19.0885 168.547 20.1406C168.193 21.1823 167.672 22.0938 166.984 22.875C166.307 23.6458 165.474 24.2448 164.484 24.6719C163.495 25.099 162.359 25.3125 161.078 25.3125C159.797 25.3125 158.656 25.099 157.656 24.6719C156.667 24.2448 155.828 23.6458 155.141 22.875C154.464 22.0938 153.948 21.1823 153.594 20.1406C153.24 19.0885 153.062 17.9479 153.062 16.7188ZM157.562 16.3906V16.7188C157.562 17.4271 157.625 18.0885 157.75 18.7031C157.875 19.3177 158.073 19.8594 158.344 20.3281C158.625 20.7865 158.99 21.1458 159.438 21.4062C159.885 21.6667 160.432 21.7969 161.078 21.7969C161.703 21.7969 162.24 21.6667 162.688 21.4062C163.135 21.1458 163.495 20.7865 163.766 20.3281C164.036 19.8594 164.234 19.3177 164.359 18.7031C164.495 18.0885 164.562 17.4271 164.562 16.7188V16.3906C164.562 15.7031 164.495 15.0573 164.359 14.4531C164.234 13.8385 164.031 13.2969 163.75 12.8281C163.479 12.349 163.12 11.974 162.672 11.7031C162.224 11.4323 161.682 11.2969 161.047 11.2969C160.411 11.2969 159.87 11.4323 159.422 11.7031C158.984 11.974 158.625 12.349 158.344 12.8281C158.073 13.2969 157.875 13.8385 157.75 14.4531C157.625 15.0573 157.562 15.7031 157.562 16.3906ZM176.344 11.7812V25H171.844V8.09375H176.078L176.344 11.7812ZM181.438 7.98438L181.359 12.1562C181.141 12.125 180.875 12.099 180.562 12.0781C180.26 12.0469 179.984 12.0312 179.734 12.0312C179.099 12.0312 178.547 12.1146 178.078 12.2812C177.62 12.4375 177.234 12.6719 176.922 12.9844C176.62 13.2969 176.391 13.6771 176.234 14.125C176.089 14.5729 176.005 15.0833 175.984 15.6562L175.078 15.375C175.078 14.2812 175.188 13.276 175.406 12.3594C175.625 11.4323 175.943 10.625 176.359 9.9375C176.786 9.25 177.307 8.71875 177.922 8.34375C178.536 7.96875 179.24 7.78125 180.031 7.78125C180.281 7.78125 180.536 7.80208 180.797 7.84375C181.057 7.875 181.271 7.92188 181.438 7.98438ZM192.438 13.4688V17H183.609V13.4688H192.438ZM201.812 25H197.297V7.32812C197.297 5.89062 197.589 4.67708 198.172 3.6875C198.766 2.69792 199.609 1.94792 200.703 1.4375C201.807 0.927083 203.141 0.671875 204.703 0.671875C205.589 0.671875 206.448 0.760417 207.281 0.9375C208.115 1.10417 208.974 1.32292 209.859 1.59375L209.203 5.20312C208.63 5.02604 208.016 4.85938 207.359 4.70312C206.703 4.54688 205.911 4.46875 204.984 4.46875C203.943 4.46875 203.151 4.71354 202.609 5.20312C202.078 5.68229 201.812 6.39062 201.812 7.32812V25ZM205.172 8.09375V11.2812H194.781V8.09375H205.172ZM211.953 8.09375V25H207.438V8.09375H211.953ZM220.219 11.7812V25H215.719V8.09375H219.953L220.219 11.7812ZM225.312 7.98438L225.234 12.1562C225.016 12.125 224.75 12.099 224.438 12.0781C224.135 12.0469 223.859 12.0312 223.609 12.0312C222.974 12.0312 222.422 12.1146 221.953 12.2812C221.495 12.4375 221.109 12.6719 220.797 12.9844C220.495 13.2969 220.266 13.6771 220.109 14.125C219.964 14.5729 219.88 15.0833 219.859 15.6562L218.953 15.375C218.953 14.2812 219.062 13.276 219.281 12.3594C219.5 11.4323 219.818 10.625 220.234 9.9375C220.661 9.25 221.182 8.71875 221.797 8.34375C222.411 7.96875 223.115 7.78125 223.906 7.78125C224.156 7.78125 224.411 7.80208 224.672 7.84375C224.932 7.875 225.146 7.92188 225.312 7.98438ZM234.906 25.3125C233.594 25.3125 232.417 25.1042 231.375 24.6875C230.333 24.2604 229.448 23.6719 228.719 22.9219C228 22.1719 227.448 21.3021 227.062 20.3125C226.677 19.3125 226.484 18.25 226.484 17.125V16.5C226.484 15.2188 226.667 14.0469 227.031 12.9844C227.396 11.9219 227.917 11 228.594 10.2188C229.281 9.4375 230.115 8.83854 231.094 8.42188C232.073 7.99479 233.177 7.78125 234.406 7.78125C235.604 7.78125 236.667 7.97917 237.594 8.375C238.521 8.77083 239.297 9.33333 239.922 10.0625C240.557 10.7917 241.036 11.6667 241.359 12.6875C241.682 13.6979 241.844 14.8229 241.844 16.0625V17.9375H228.406V14.9375H237.422V14.5938C237.422 13.9688 237.307 13.4115 237.078 12.9219C236.859 12.4219 236.526 12.026 236.078 11.7344C235.63 11.4427 235.057 11.2969 234.359 11.2969C233.766 11.2969 233.255 11.4271 232.828 11.6875C232.401 11.9479 232.052 12.3125 231.781 12.7812C231.521 13.25 231.323 13.8021 231.188 14.4375C231.062 15.0625 231 15.75 231 16.5V17.125C231 17.8021 231.094 18.4271 231.281 19C231.479 19.5729 231.755 20.0677 232.109 20.4844C232.474 20.901 232.911 21.224 233.422 21.4531C233.943 21.6823 234.531 21.7969 235.188 21.7969C236 21.7969 236.755 21.6406 237.453 21.3281C238.161 21.0052 238.771 20.5208 239.281 19.875L241.469 22.25C241.115 22.7604 240.63 23.25 240.016 23.7188C239.411 24.1875 238.682 24.5729 237.828 24.875C236.974 25.1667 236 25.3125 234.906 25.3125Z'
                fill='#61CC0C'
              />
            </svg>
          </Typography>

          <Typography
            variant='h5'
            noWrap
            component='a'
            href=''
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <svg
              width='220'
              height='26'
              viewBox='0 0 242 26'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7.85938 25H3.32812V6.59375C3.32812 5.3125 3.57812 4.23438 4.07812 3.35938C4.58854 2.47396 5.30208 1.80729 6.21875 1.35938C7.14583 0.901042 8.24479 0.671875 9.51562 0.671875C9.93229 0.671875 10.3333 0.703125 10.7188 0.765625C11.1042 0.817708 11.4792 0.885417 11.8438 0.96875L11.7969 4.35938C11.599 4.30729 11.3906 4.27083 11.1719 4.25C10.9531 4.22917 10.6979 4.21875 10.4062 4.21875C9.86458 4.21875 9.40104 4.3125 9.01562 4.5C8.64062 4.67708 8.35417 4.94271 8.15625 5.29688C7.95833 5.65104 7.85938 6.08333 7.85938 6.59375V25ZM11.2344 8.09375V11.2812H0.8125V8.09375H11.2344ZM12.875 16.7188V16.3906C12.875 15.151 13.0521 14.0104 13.4062 12.9688C13.7604 11.9167 14.276 11.0052 14.9531 10.2344C15.6302 9.46354 16.4635 8.86458 17.4531 8.4375C18.4427 8 19.5781 7.78125 20.8594 7.78125C22.1406 7.78125 23.2812 8 24.2812 8.4375C25.2812 8.86458 26.1198 9.46354 26.7969 10.2344C27.4844 11.0052 28.0052 11.9167 28.3594 12.9688C28.7135 14.0104 28.8906 15.151 28.8906 16.3906V16.7188C28.8906 17.9479 28.7135 19.0885 28.3594 20.1406C28.0052 21.1823 27.4844 22.0938 26.7969 22.875C26.1198 23.6458 25.2865 24.2448 24.2969 24.6719C23.3073 25.099 22.1719 25.3125 20.8906 25.3125C19.6094 25.3125 18.4688 25.099 17.4688 24.6719C16.4792 24.2448 15.6406 23.6458 14.9531 22.875C14.276 22.0938 13.7604 21.1823 13.4062 20.1406C13.0521 19.0885 12.875 17.9479 12.875 16.7188ZM17.375 16.3906V16.7188C17.375 17.4271 17.4375 18.0885 17.5625 18.7031C17.6875 19.3177 17.8854 19.8594 18.1562 20.3281C18.4375 20.7865 18.8021 21.1458 19.25 21.4062C19.6979 21.6667 20.2448 21.7969 20.8906 21.7969C21.5156 21.7969 22.0521 21.6667 22.5 21.4062C22.9479 21.1458 23.3073 20.7865 23.5781 20.3281C23.849 19.8594 24.0469 19.3177 24.1719 18.7031C24.3073 18.0885 24.375 17.4271 24.375 16.7188V16.3906C24.375 15.7031 24.3073 15.0573 24.1719 14.4531C24.0469 13.8385 23.8438 13.2969 23.5625 12.8281C23.2917 12.349 22.9323 11.974 22.4844 11.7031C22.0365 11.4323 21.4948 11.2969 20.8594 11.2969C20.224 11.2969 19.6823 11.4323 19.2344 11.7031C18.7969 11.974 18.4375 12.349 18.1562 12.8281C17.8854 13.2969 17.6875 13.8385 17.5625 14.4531C17.4375 15.0573 17.375 15.7031 17.375 16.3906ZM30.9375 16.7188V16.3906C30.9375 15.151 31.1146 14.0104 31.4688 12.9688C31.8229 11.9167 32.3385 11.0052 33.0156 10.2344C33.6927 9.46354 34.526 8.86458 35.5156 8.4375C36.5052 8 37.6406 7.78125 38.9219 7.78125C40.2031 7.78125 41.3438 8 42.3438 8.4375C43.3438 8.86458 44.1823 9.46354 44.8594 10.2344C45.5469 11.0052 46.0677 11.9167 46.4219 12.9688C46.776 14.0104 46.9531 15.151 46.9531 16.3906V16.7188C46.9531 17.9479 46.776 19.0885 46.4219 20.1406C46.0677 21.1823 45.5469 22.0938 44.8594 22.875C44.1823 23.6458 43.349 24.2448 42.3594 24.6719C41.3698 25.099 40.2344 25.3125 38.9531 25.3125C37.6719 25.3125 36.5312 25.099 35.5312 24.6719C34.5417 24.2448 33.7031 23.6458 33.0156 22.875C32.3385 22.0938 31.8229 21.1823 31.4688 20.1406C31.1146 19.0885 30.9375 17.9479 30.9375 16.7188ZM35.4375 16.3906V16.7188C35.4375 17.4271 35.5 18.0885 35.625 18.7031C35.75 19.3177 35.9479 19.8594 36.2188 20.3281C36.5 20.7865 36.8646 21.1458 37.3125 21.4062C37.7604 21.6667 38.3073 21.7969 38.9531 21.7969C39.5781 21.7969 40.1146 21.6667 40.5625 21.4062C41.0104 21.1458 41.3698 20.7865 41.6406 20.3281C41.9115 19.8594 42.1094 19.3177 42.2344 18.7031C42.3698 18.0885 42.4375 17.4271 42.4375 16.7188V16.3906C42.4375 15.7031 42.3698 15.0573 42.2344 14.4531C42.1094 13.8385 41.9062 13.2969 41.625 12.8281C41.3542 12.349 40.9948 11.974 40.5469 11.7031C40.099 11.4323 39.5573 11.2969 38.9219 11.2969C38.2865 11.2969 37.7448 11.4323 37.2969 11.7031C36.8594 11.974 36.5 12.349 36.2188 12.8281C35.9479 13.2969 35.75 13.8385 35.625 14.4531C35.5 15.0573 35.4375 15.7031 35.4375 16.3906ZM58 8.09375V11.2812H48.1562V8.09375H58ZM50.5938 3.92188H55.0938V19.9062C55.0938 20.3958 55.1562 20.7708 55.2812 21.0312C55.4167 21.2917 55.6146 21.474 55.875 21.5781C56.1354 21.6719 56.4635 21.7188 56.8594 21.7188C57.1406 21.7188 57.3906 21.7083 57.6094 21.6875C57.8385 21.6562 58.0312 21.625 58.1875 21.5938L58.2031 24.9062C57.8177 25.0312 57.401 25.1302 56.9531 25.2031C56.5052 25.276 56.0104 25.3125 55.4688 25.3125C54.4792 25.3125 53.6146 25.151 52.875 24.8281C52.1458 24.4948 51.5833 23.9635 51.1875 23.2344C50.7917 22.5052 50.5938 21.5469 50.5938 20.3594V3.92188ZM69.4375 13.4688V17H60.6094V13.4688H69.4375ZM78.9219 25H74.3906V6.59375C74.3906 5.3125 74.6406 4.23438 75.1406 3.35938C75.651 2.47396 76.3646 1.80729 77.2812 1.35938C78.2083 0.901042 79.3073 0.671875 80.5781 0.671875C80.9948 0.671875 81.3958 0.703125 81.7812 0.765625C82.1667 0.817708 82.5417 0.885417 82.9062 0.96875L82.8594 4.35938C82.6615 4.30729 82.4531 4.27083 82.2344 4.25C82.0156 4.22917 81.7604 4.21875 81.4688 4.21875C80.9271 4.21875 80.4635 4.3125 80.0781 4.5C79.7031 4.67708 79.4167 4.94271 79.2188 5.29688C79.0208 5.65104 78.9219 6.08333 78.9219 6.59375V25ZM82.2969 8.09375V11.2812H71.875V8.09375H82.2969ZM92.0625 25.3125C90.75 25.3125 89.5729 25.1042 88.5312 24.6875C87.4896 24.2604 86.6042 23.6719 85.875 22.9219C85.1562 22.1719 84.6042 21.3021 84.2188 20.3125C83.8333 19.3125 83.6406 18.25 83.6406 17.125V16.5C83.6406 15.2188 83.8229 14.0469 84.1875 12.9844C84.5521 11.9219 85.0729 11 85.75 10.2188C86.4375 9.4375 87.2708 8.83854 88.25 8.42188C89.2292 7.99479 90.3333 7.78125 91.5625 7.78125C92.7604 7.78125 93.8229 7.97917 94.75 8.375C95.6771 8.77083 96.4531 9.33333 97.0781 10.0625C97.7135 10.7917 98.1927 11.6667 98.5156 12.6875C98.8385 13.6979 99 14.8229 99 16.0625V17.9375H85.5625V14.9375H94.5781V14.5938C94.5781 13.9688 94.4635 13.4115 94.2344 12.9219C94.0156 12.4219 93.6823 12.026 93.2344 11.7344C92.7865 11.4427 92.2135 11.2969 91.5156 11.2969C90.9219 11.2969 90.4115 11.4271 89.9844 11.6875C89.5573 11.9479 89.2083 12.3125 88.9375 12.7812C88.6771 13.25 88.4792 13.8021 88.3438 14.4375C88.2188 15.0625 88.1562 15.75 88.1562 16.5V17.125C88.1562 17.8021 88.25 18.4271 88.4375 19C88.6354 19.5729 88.9115 20.0677 89.2656 20.4844C89.6302 20.901 90.0677 21.224 90.5781 21.4531C91.099 21.6823 91.6875 21.7969 92.3438 21.7969C93.1562 21.7969 93.9115 21.6406 94.6094 21.3281C95.3177 21.0052 95.9271 20.5208 96.4375 19.875L98.625 22.25C98.2708 22.7604 97.7865 23.25 97.1719 23.7188C96.5677 24.1875 95.8385 24.5729 94.9844 24.875C94.1302 25.1667 93.1562 25.3125 92.0625 25.3125ZM109.344 25.3125C108.031 25.3125 106.854 25.1042 105.812 24.6875C104.771 24.2604 103.885 23.6719 103.156 22.9219C102.438 22.1719 101.885 21.3021 101.5 20.3125C101.115 19.3125 100.922 18.25 100.922 17.125V16.5C100.922 15.2188 101.104 14.0469 101.469 12.9844C101.833 11.9219 102.354 11 103.031 10.2188C103.719 9.4375 104.552 8.83854 105.531 8.42188C106.51 7.99479 107.615 7.78125 108.844 7.78125C110.042 7.78125 111.104 7.97917 112.031 8.375C112.958 8.77083 113.734 9.33333 114.359 10.0625C114.995 10.7917 115.474 11.6667 115.797 12.6875C116.12 13.6979 116.281 14.8229 116.281 16.0625V17.9375H102.844V14.9375H111.859V14.5938C111.859 13.9688 111.745 13.4115 111.516 12.9219C111.297 12.4219 110.964 12.026 110.516 11.7344C110.068 11.4427 109.495 11.2969 108.797 11.2969C108.203 11.2969 107.693 11.4271 107.266 11.6875C106.839 11.9479 106.49 12.3125 106.219 12.7812C105.958 13.25 105.76 13.8021 105.625 14.4375C105.5 15.0625 105.438 15.75 105.438 16.5V17.125C105.438 17.8021 105.531 18.4271 105.719 19C105.917 19.5729 106.193 20.0677 106.547 20.4844C106.911 20.901 107.349 21.224 107.859 21.4531C108.38 21.6823 108.969 21.7969 109.625 21.7969C110.438 21.7969 111.193 21.6406 111.891 21.3281C112.599 21.0052 113.208 20.5208 113.719 19.875L115.906 22.25C115.552 22.7604 115.068 23.25 114.453 23.7188C113.849 24.1875 113.12 24.5729 112.266 24.875C111.411 25.1667 110.438 25.3125 109.344 25.3125ZM127.125 8.09375V11.2812H117.281V8.09375H127.125ZM119.719 3.92188H124.219V19.9062C124.219 20.3958 124.281 20.7708 124.406 21.0312C124.542 21.2917 124.74 21.474 125 21.5781C125.26 21.6719 125.589 21.7188 125.984 21.7188C126.266 21.7188 126.516 21.7083 126.734 21.6875C126.964 21.6562 127.156 21.625 127.312 21.5938L127.328 24.9062C126.943 25.0312 126.526 25.1302 126.078 25.2031C125.63 25.276 125.135 25.3125 124.594 25.3125C123.604 25.3125 122.74 25.151 122 24.8281C121.271 24.4948 120.708 23.9635 120.312 23.2344C119.917 22.5052 119.719 21.5469 119.719 20.3594V3.92188Z'
                fill='black'
              />
              <path
                d='M138.562 13.4688V17H129.734V13.4688H138.562ZM148.047 25H143.516V6.59375C143.516 5.3125 143.766 4.23438 144.266 3.35938C144.776 2.47396 145.49 1.80729 146.406 1.35938C147.333 0.901042 148.432 0.671875 149.703 0.671875C150.12 0.671875 150.521 0.703125 150.906 0.765625C151.292 0.817708 151.667 0.885417 152.031 0.96875L151.984 4.35938C151.786 4.30729 151.578 4.27083 151.359 4.25C151.141 4.22917 150.885 4.21875 150.594 4.21875C150.052 4.21875 149.589 4.3125 149.203 4.5C148.828 4.67708 148.542 4.94271 148.344 5.29688C148.146 5.65104 148.047 6.08333 148.047 6.59375V25ZM151.422 8.09375V11.2812H141V8.09375H151.422ZM153.062 16.7188V16.3906C153.062 15.151 153.24 14.0104 153.594 12.9688C153.948 11.9167 154.464 11.0052 155.141 10.2344C155.818 9.46354 156.651 8.86458 157.641 8.4375C158.63 8 159.766 7.78125 161.047 7.78125C162.328 7.78125 163.469 8 164.469 8.4375C165.469 8.86458 166.307 9.46354 166.984 10.2344C167.672 11.0052 168.193 11.9167 168.547 12.9688C168.901 14.0104 169.078 15.151 169.078 16.3906V16.7188C169.078 17.9479 168.901 19.0885 168.547 20.1406C168.193 21.1823 167.672 22.0938 166.984 22.875C166.307 23.6458 165.474 24.2448 164.484 24.6719C163.495 25.099 162.359 25.3125 161.078 25.3125C159.797 25.3125 158.656 25.099 157.656 24.6719C156.667 24.2448 155.828 23.6458 155.141 22.875C154.464 22.0938 153.948 21.1823 153.594 20.1406C153.24 19.0885 153.062 17.9479 153.062 16.7188ZM157.562 16.3906V16.7188C157.562 17.4271 157.625 18.0885 157.75 18.7031C157.875 19.3177 158.073 19.8594 158.344 20.3281C158.625 20.7865 158.99 21.1458 159.438 21.4062C159.885 21.6667 160.432 21.7969 161.078 21.7969C161.703 21.7969 162.24 21.6667 162.688 21.4062C163.135 21.1458 163.495 20.7865 163.766 20.3281C164.036 19.8594 164.234 19.3177 164.359 18.7031C164.495 18.0885 164.562 17.4271 164.562 16.7188V16.3906C164.562 15.7031 164.495 15.0573 164.359 14.4531C164.234 13.8385 164.031 13.2969 163.75 12.8281C163.479 12.349 163.12 11.974 162.672 11.7031C162.224 11.4323 161.682 11.2969 161.047 11.2969C160.411 11.2969 159.87 11.4323 159.422 11.7031C158.984 11.974 158.625 12.349 158.344 12.8281C158.073 13.2969 157.875 13.8385 157.75 14.4531C157.625 15.0573 157.562 15.7031 157.562 16.3906ZM176.344 11.7812V25H171.844V8.09375H176.078L176.344 11.7812ZM181.438 7.98438L181.359 12.1562C181.141 12.125 180.875 12.099 180.562 12.0781C180.26 12.0469 179.984 12.0312 179.734 12.0312C179.099 12.0312 178.547 12.1146 178.078 12.2812C177.62 12.4375 177.234 12.6719 176.922 12.9844C176.62 13.2969 176.391 13.6771 176.234 14.125C176.089 14.5729 176.005 15.0833 175.984 15.6562L175.078 15.375C175.078 14.2812 175.188 13.276 175.406 12.3594C175.625 11.4323 175.943 10.625 176.359 9.9375C176.786 9.25 177.307 8.71875 177.922 8.34375C178.536 7.96875 179.24 7.78125 180.031 7.78125C180.281 7.78125 180.536 7.80208 180.797 7.84375C181.057 7.875 181.271 7.92188 181.438 7.98438ZM192.438 13.4688V17H183.609V13.4688H192.438ZM201.812 25H197.297V7.32812C197.297 5.89062 197.589 4.67708 198.172 3.6875C198.766 2.69792 199.609 1.94792 200.703 1.4375C201.807 0.927083 203.141 0.671875 204.703 0.671875C205.589 0.671875 206.448 0.760417 207.281 0.9375C208.115 1.10417 208.974 1.32292 209.859 1.59375L209.203 5.20312C208.63 5.02604 208.016 4.85938 207.359 4.70312C206.703 4.54688 205.911 4.46875 204.984 4.46875C203.943 4.46875 203.151 4.71354 202.609 5.20312C202.078 5.68229 201.812 6.39062 201.812 7.32812V25ZM205.172 8.09375V11.2812H194.781V8.09375H205.172ZM211.953 8.09375V25H207.438V8.09375H211.953ZM220.219 11.7812V25H215.719V8.09375H219.953L220.219 11.7812ZM225.312 7.98438L225.234 12.1562C225.016 12.125 224.75 12.099 224.438 12.0781C224.135 12.0469 223.859 12.0312 223.609 12.0312C222.974 12.0312 222.422 12.1146 221.953 12.2812C221.495 12.4375 221.109 12.6719 220.797 12.9844C220.495 13.2969 220.266 13.6771 220.109 14.125C219.964 14.5729 219.88 15.0833 219.859 15.6562L218.953 15.375C218.953 14.2812 219.062 13.276 219.281 12.3594C219.5 11.4323 219.818 10.625 220.234 9.9375C220.661 9.25 221.182 8.71875 221.797 8.34375C222.411 7.96875 223.115 7.78125 223.906 7.78125C224.156 7.78125 224.411 7.80208 224.672 7.84375C224.932 7.875 225.146 7.92188 225.312 7.98438ZM234.906 25.3125C233.594 25.3125 232.417 25.1042 231.375 24.6875C230.333 24.2604 229.448 23.6719 228.719 22.9219C228 22.1719 227.448 21.3021 227.062 20.3125C226.677 19.3125 226.484 18.25 226.484 17.125V16.5C226.484 15.2188 226.667 14.0469 227.031 12.9844C227.396 11.9219 227.917 11 228.594 10.2188C229.281 9.4375 230.115 8.83854 231.094 8.42188C232.073 7.99479 233.177 7.78125 234.406 7.78125C235.604 7.78125 236.667 7.97917 237.594 8.375C238.521 8.77083 239.297 9.33333 239.922 10.0625C240.557 10.7917 241.036 11.6667 241.359 12.6875C241.682 13.6979 241.844 14.8229 241.844 16.0625V17.9375H228.406V14.9375H237.422V14.5938C237.422 13.9688 237.307 13.4115 237.078 12.9219C236.859 12.4219 236.526 12.026 236.078 11.7344C235.63 11.4427 235.057 11.2969 234.359 11.2969C233.766 11.2969 233.255 11.4271 232.828 11.6875C232.401 11.9479 232.052 12.3125 231.781 12.7812C231.521 13.25 231.323 13.8021 231.188 14.4375C231.062 15.0625 231 15.75 231 16.5V17.125C231 17.8021 231.094 18.4271 231.281 19C231.479 19.5729 231.755 20.0677 232.109 20.4844C232.474 20.901 232.911 21.224 233.422 21.4531C233.943 21.6823 234.531 21.7969 235.188 21.7969C236 21.7969 236.755 21.6406 237.453 21.3281C238.161 21.0052 238.771 20.5208 239.281 19.875L241.469 22.25C241.115 22.7604 240.63 23.25 240.016 23.7188C239.411 24.1875 238.682 24.5729 237.828 24.875C236.974 25.1667 236 25.3125 234.906 25.3125Z'
                fill='#61CC0C'
              />
            </svg>
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title='Open settings'>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id='menu-appbar'
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key='activity' onClick={handleCloseUserMenu}>
                <Typography textAlign='center'>
                  <Link to='/profileEdit'>Profile Setting</Link>
                </Typography>
              </MenuItem>
              <MenuItem key='account' onClick={handleCloseUserMenu}>
                <Typography textAlign='center'>
                  <Link to='/account'>Account setting</Link>
                </Typography>
              </MenuItem>
              <MenuItem key='logout' onClick={handleCloseUserMenu}>
                <Typography textAlign='center' onClick = {handleLogout}>
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
