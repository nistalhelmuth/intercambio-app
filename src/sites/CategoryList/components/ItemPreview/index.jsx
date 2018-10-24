import React, { Component, Fragment } from 'react';

import './styles.css';

import Stars from '../../../SharedComponents/Stars';

class ItemPreview extends Component {
  render() {
    return (
      <Fragment>
        <div className="itemPreview">        
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExIVFhUXFxgYFxUXGBcaGBgZGBgeGhgXGBoYHSgiGhonGxcXITEhJikrLi4uGx8zODMtNygtLisBCgoKDg0OGhAQGy0lICYtLS0yLy0tLS0tLS0tNS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYCAwQHAQj/xAA+EAABAgMFBAgFAgUDBQAAAAABAAIDESEEBRIxQVFhcYEGEyIykaGx8EJSwdHhcvEHIzNiohSSsiRDU4KT/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAIDBAEF/8QAJhEAAgICAgICAgIDAAAAAAAAAAECEQMhEjEEQRMiUXEjMhRCYf/aAAwDAQACEQMRAD8A9xREQBERAEREAREQBEXHaLwa3Kp8vFRlJR7OqLfR2LFzgMyAoO0Xk4/FIbBRRse1E5knftWeXkpdIvj47fZbWxWnJwPMLNUYuW6FbXtye4c1FeWvaJPxX6Zc1jEiACZICr1mv9w74DhtFCuOJe3XRS1zTIAkCcpjiFOXkxr69kV48r30WIXrBnLGPNdEG0Md3XA8CqpZr9YDhY0AbhJdjbbCe4EyxCocM/ykcz90JYq6LIi5rHaMQkTM7du9dK0J2Z2ERF0BERAEREAREQBERAEREAREQBcke8GNpOZ2Cq57VFc8kA4WDN23cFGW29GsBDJT3e6rPPNXRfDFfZLsvaHKZm3iCuh9sYG4sQlpvVNdf5kzFKTnBpFMzT1WhjpZ5ql+TJFq8ZMsdtvAupkNiiI0dcT7XnXx5fhchtk6DZXcs0puTtmmGNRWiSxrXFJIOE10+3Bc8OIdVsa6q4SN4dlvqmFamRBUfKSOGR9CFni9++K6cMXrXil9Dqtj3cOa1P0FOUqocMIdlBaZHJc0RzoZBXZCeQZ++azvvD1bZZk0U1tEHpkjd1vODEDVva8Mx4K2wnzaDtAPiFRLsaWwyc+yaZ1lQK9WeeBuLPCJ8ZVWzA3RkzJJmxERaCgIiIAiIgCIiAIiIAiIgC5rwjlkMuGenFdK4b47g2Y2z8VDI6iyUFckRN+23q2SGglxKqcGMDNz3Hgp/pGyfmoCG4AErBLcjfBVE02WReYuGVOyNg371jabTXOvP05rLEAuR7RqqmXozdEc7Xns56LfCbLedSaTp9PotcEAD6lbIrZ9pvMS9D+6HTuZLKW/f5I+hoDLj70n4LmsscOFDu/HvYVv62Q95+wUImxzpTJyIBlLYNm/jotDbRls5LNz89m7j+VrcJCi6B/qSSBTbyBqfXyTHmRPz+ig75vpsBzGhrnxHAkBoE8M6kkyAHdzOm5bblv2FaJtHeBkQSMxnkSJqXF1ZG1dE1BtE/T3JbXML3N2CdN+i4Aa+n1+y77CHuJZC757oMveW1cS2ckd9nGKKyA0ZkOfLRgrymrwom4rkZAGI9qIe8851zCll6GGDitmDLJSegiIrSoIiIAiIgCIiAIiIAiIgC02yDjYW7RRbkXGrVHU6dlatUPG2ZEjkRsIzVWvuD1bHGUxnTSVVfbxsBd2oZAdqDk7jv3qCt1kiEEGA80+EBwPArDkg0zbjmmipuJIa4VDpSI2ETXK59fD2F2xYJYwAgtIEi05ggZHf9lGxKzGynBUGlHZCdThnsB9kqPvu+GWZmJ0ySey0GXMk5Ck58V0WaIJSIoq901u10RrHNbMMEiJE0xTqMyJty1BKlBJumJtpaMLJ0y7TesELCfjhxMZYMpuEgcOhI+iuTLSJZ+PIg+a8iuq64sYxGshQQMb3420DA8YcDn5CGKnDKcwvbbk6Mve1mKbGBoAJ77hLOXwjjXPJW5MauoFOPI+NzOV4Bw61Ou4t9SF0dUZcNZGWuqm7xtdgsDQ6M9rPlxEucZD4RU+CgH/AMWLBUNZGcBqGNA/ycCufF+WPlb6RSunlwxIjhFhNe84Q1whvDXAMeSdDm17+BDZqC/h7drhaXuaHNhzJa0kOcGzOHEW0xESHIr2K4+lV329/Vhsnyo2IwAnga+C3Xt0eENpfAEgKuhjUbW/ZWfbhS2V3H5LemVh0SR0l6KY6MPPXw/1KEtDZkKf6HwibQzdiP8AifuqYL7Iuyf1Z6EiIvSPMCIiAIiIAiIgCIiAIiIAiIgCIiAIiICldLrD2iRTEZ01nWu6YVNdAIyqJU/K9Uv2x9YyYzb6a++KoUeyAuOnhlsXnZo8ZnpYJ8oEQAZS8taHL1W+HD2z/JAoZ6fZfLRCIM5fnZ5SWsxpMcRUgEjkfuqi8tXRW6w7+a8AhrpMbpMSm+W2dBwJ1ErUQZLkuGE1kCE0fI30z85rsiP0WyMeMaPPnJylZ+aOmF4RY1tjujTxNiOYGn4WtPZAnkJV5zUXZ2OrLMVzApkczU1GWk17d02/h/BtjutYeqj6vlNrxlJ7daUmK8V5/b/4c2yDIkwnAuY3E0uJBiPawULaAOcCXaCaFilZwdG3hlpgUcSXto0EuMjOm7Xgv0EyPtVS6GdDm2ScR5DozhIuGTR8rZ5CgJ2yGxWI2nE5wA7LaE7XfKOAz3mWhXEvZDI70U69oOCM9oyxTHA1A5TlyVg6Cw/5ridGHzI/Kh+kh/6gfob6lWnoNZC2E6IR33SHBv5J8FDHH+UsyS/iLKiItxhCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAqt0gu0MONo7JnyJzVpWu0QWvaWuEwVXlx840WY58HZ5naQDMbPHd9PFR7rN3gcj2TwNT6qz35cxhGcwWmctvAjVQbgQarzpRcXTPShJNWi1dHbaXwIc+80YH/qbTzoea7bVjc0iG8Nf8LnNxNB/ubMEjcCDvCp93WwwXkirXSxDhrsmPe60QrfDfUPG8EgHwWiE7RmyQpnOLfaG0iWYkz70J7HNltIiFjgdwDuJWFsLozXNDC3Y5+GVDMGTXEngZclJOrlltWsvA4qTKzREs8Z9HRQxkqthgh//ANC6g4NB2ELOKGQ2ACTWtHIBc1rvRjNZnYM/xzVbvW9TEo6jRUNzJ4rkppE442zTbLR1kR0Q0BoP0ig+/NW+6elcBsNjHNczCAKCbacK+SoLrRPh6bytgdXiqo5HF2i6eNSVM9eslshxBOG9ruBrzGYW9eT2OM4EOBIO0GXorTdnShwpFGIfMO8OOhWiHkp6kZp+M10W9Fqs1pbEbiYQR7z2LatN2ZgiIgCIiAIiIAiIgCIiAIiIAiIgCjr0vIQ6Nq7yHFZ3lbxDEh3vRVG32jWdTr5lZs2bjpdmjDh5bfRyXra3vmXOmTr+dPsoaHaDikZz2E0O7c4LfFdXDM8CfHRcFsBwukaykCdpND4lY7N6ib4kZ0i5jgWknCCJmQEudcQ5LGbyKvPCTfsvsKDKgyFAPML6/wB5eyhKjKGHjJ7hwMudFv6+IA0Y3GdKknh+y0OmNhXwxgeUs/Lzl4jahykcVrivLpBxluMvQb1ogwc5/VbY83GkzL34LOKx/VuLAMeE4Z5T0nLeugzYBlKe5aXvLHSlTTduVUuu/LR/qRCiSxTkWjDLKfwzrWtd2it97wSGBzc2kGuydZrrjTphqqf5NkK1ftlplLPRdlmjzCg7PaGkCpGw6y04qQZFlXKvLzy5qB2ixXdeb4LptPEaHcVd7svRkYdmjtWnPltC8vFopMjcpO67eWkEEhw2aex9VbiyuH6M+XCpb9npaLkuu2CLDDtciN6616CaatHntU6YREXTgREQBERAEREAREQBabVHwNn4Lcq1ftvJMm1lkqs2ThGy3Fj5yo5LfaSSSa+qgI1orI1GX5n4+5Lqc40nlWc948Vxsaak+89vH1Xm3Z6SSRoc2fvkom0xv5rG6TMztMvp7yUxaA4Ay2GSqpjjrw0E9kVOdXD1lXmpJHbLSxjTmfZWLmJBfNomVtY3F9+S4DmwH3xokG7okSYDZiXh40VhsNzzGJ9B8up47AppolIASGwblZGF9lU8qXRXG3M8CeFldJ19OK549kl3mluszlwmKK2PWJap/GvRV8r9nnke44XWiMW9sDvDXjtXeYU24TkRJTV43dhBczLVuze37eCi2j2FW009lylyRRLcDCi4DPSR2t0l4Kasb5idK568la7vueBa8dnjN7wxw3ijmPFCWneCJg0OFVu8Ljj2B5ZGGOEe5HaOyZ/C75HZUPJdcG48kdjkXLiz6IlNo45cDlLPNbocR4yE91Z8xpl5rVAjNIeBLOfvwQ2oggSBI1lkPHLcqyzsnrsviJDM20Go28QeBV4uW92xxlJwzG3eF5ey11qafisvPfyU9ctrwOa9u3L1CsxZXB/8KM2FSV+z0VF8Y4EAjI1X1ekeaEREAREQBERAEREBzXhaAxhM6mg+6pd6R6jPQTlmTQDdUqavuOS4icpUCrVoaHg+tZgg0NN48V52bJynT6R6GCHGN+zCxRCXOMjINnrKZykZYXTB+ElfQBpSXv7rWYvVsDWmeZJIq4mvalKlfdSuVtpm4zyG/OfFRyuDl9FSJ4YzUP5HbOmK2hzFFSrPDGJx1LiZVJr+Ark5xrOeR9FWoMKRcJfEdk6H8BciTJayOmAOHPYFYrksAef7W57zoFXLtdMz5q7XMJQhlWZ8cvKS7FWyOSVRJB7ZoAvoKyAV5lNbhNferos5I5dRxnK9qr96WXA+nddUbjqPqrO4KJvtk4ZPyuDvofIlRnG0TxyqRXTeX+niMi/K6ZA1HxDmJhelWaPCtEIObJ8N4yImCDQgg+BC8b6RRqS2yC6P4e9LXWeN1EQkwHukCT/TJ+Kfy1r48WCfHT6JZ8fJWuyZ6U9BIkImNY8Tm6walzZ/Jq4bsxvVSsdgtMU1GBtQS6nGQzPovVb6vszLIRkBm8Zk7G7BvUHAssWIQWtMjm85ca1PHVQyuPKok8Tmo3IgLP0ebrFiEaCgkuuDYXMPZdMDQ0Oec8j5K1MuJgqXuPCQC+uuqCNDPbiM/VR+OTDzRJ66CephzzwhdiiLgLm4oRJIbItMts5jxHmpdb4P6owT/swiIpkQiIgCIiAIiICqXqycR24me41/Cgbc4NnMj88dNQrffV1ucesh96Xab8wVHvY1M2vBBInQ+a8vLBxls9PDJSjo44kXPXcD72rCzmU+VCuGytixX4IUM73Oo0DbP2VJWHo/FMaI2NE7DQCwsMqkmYcCNJBRoubSNnWt+YAkSEteXioa1PHXPDTzzqBVTLLga04hFfP+6RHhKnKS47TcEQOxNLXA6Gh8+KkiDZhd5q7bLz+6vdnfIADISVBsZLXFrwWuGhp+4Vuu+PNjT/aJ8ZKUSvJ0iahxF0Mco1j10woqmmUtHavhKwYZrKSsshRhFKi76P8AIifoPopJygOldowQSMpkeAOI/wCLSuSeiUFtHn18vD4rgD/TABrTE7QcipHozdgc4OLewyVfmePoPsomxMMZwayrnuLydKmZdPYNNwG1XqzWcQ4YY3JoP5PGazt0a2St2WMRSS7utlT5jsO7dv4znMslHXICILTLvEnxNPKS7HuV2NUjLldyMnP0Wt0NfGPnkthMgprZWzZYDKIN4I+v0UwoexViNpt9CphaMfRTPsIiKZEIiIAiIgCIiALivC74LwTEYDvqD4iq7VC3/bJDAPDadAq8slGNssxRcpUiFdAhQQ4Q2SxGcqkk5AbSV8stgiuLi5uAGVTU0ypOmfFSN12VwGKJLGQJS03cV1OfVY1ivcjW8taiRjbibObojjuAAHoV8i3Qf+26XGslKmIsWOqpcI9UQ+Sf5K3eV3kD+a2bfnbm3eRKnmFH2J7oZwkzaT2XUk77HcrvNQN9WBoyEmuNQPhdmHDZ72qMocdonDJy0xCeulj1C2e1kOwPo4AcHDQhSg3KJ1okobltxLjhvW9jhKc1YmVtGTnLznpvazFeITTQmVNgPbO8Twt8Vcr5vIMaWg9sif6R8x+iod0yjOEXQmn6GE4fE15qMmW4o+yauK72wWZdo5nXh9F3RHbkhlYRKnTfl7/ZUstRY7uiEwWGekvCn0VMf0stJiRQ6EOw9kJkISfEiui4g1wAeGtZ2Imb59kk4ZYTbrmM4PAn1n9VB9I+jDrRaIUZjnNkMLi0hrgWOxwojXEHtNcX0LXAh7hITmtmFqtmHMneiDsn8QOsnDYzDFMZkNsN7SxzWmfWOeCTIMwRMWcurIn2mkbovSGPGtcFsNr4IDSYoiMjhuHHIHNuBzg2LgJDmuIaJ7JG6uh/VWmHFJxCGyIcTpF74sWJ1kR735ucSBkGiWISqu+8+jDYhiESb1vVtidkf02uJewDIBwc8f8Au7bS64J9FLUmiV6FRokQOc+chKUySa1nNxJy/bU2lcl2QQ1gkJTry0+/Ndasu91RBKlTdhERDoREQBERAEREAUAxk48RxrhyGwzImOSn1BR+zGePmE/D9/JUZv8AX9l2L3+jcXLVKaye1fGv0kqm70WJGqIsIT+0BWs/JdMWEvlmZIzUadnb0bGwtq4L2bOG/cJ/7a/RSTyo+8nfyon6HeilLoR7RVr3gdZCLh32DECKGXxDwXLYrwitAkQ8HR2Y8FJw3abRJWyw9HLKxolCDpgVcS6e+tByVWLG59F2TIoaaKpDv2QrCdQTzC0m94sSjQGDxJns2eCvRuWzf+GH/tHoumBZYbO4xrf0gD0V3+PL2yn/ACIeonmd4XFa4kJ3VwXnF3nGQJnme2QTr5KM6P2fq2CGRJzJtLSKjaCNJFeyqOvS5YUermyeMnjvcDtG4rsvG1oR8p39kUiGKTXwg7FM2i44sPIY27W5825+E1GluayTi49mqElLo7LkiScWaOE+Y9+SmpKtsaQZihFVNwLzZhm+jhpt4KeKS6ZTmi+0dq1wm434BpV0tBs4n7nRaYAjRT2WFjfnfoP7RqVN2Oythtwt4knMnaStUFy/Rml9f2bwERFoKQiIgCIiAIiIAiIgCg7/AAWubEAy89JeanFptlnERhadfJV5YuUaXZZjlxlbIpsTEARkRMcFlDauGBEMJxhvoJ0Ozju1nvXes0Xey+SoyesAV9cVrkjls4kZuco6+f6R4t/5Bdz1D3nHxHCMmmp2uylyUJypFmOOzisFnxxWt2kD7+UyvQQoHo1dxbOK4Vd3Ru28/Tip5aPHhxjb9lHkT5SpegiItBQEREAWm0WSG/vMB3kV8VuRcaT7Op0cIuiB8nm77rohWVje6xo3gCfityLihFdI65N9sIiKREIiIAiIgCIiAIiIAiIgCIiA5bdYWxBWh0PvRQ0RkWDQjE3T99OCsa+EKqeJS2tMthlcdPaIqBFa4TBHDVct4WtrNJnYPeSlYl2wj8A5THovkO64LTiEMT2mp81W8Un+CayRRAWd8aMOxDkMp/YkAKSsNwtbIvOKXw/DPftUyinHBFO3sjLM2qWgiIrikIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgP/Z" alt="objeto"/>
          <div className="content">
            <h1>
              {'Nombre de la persona'}
            </h1>
            <hr/>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
            </p>
          </div>
          <Stars num={3}/>
        </div>
        <hr/>
      </Fragment>
    );
  }
}

export default ItemPreview;
