import { Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import HighMaps from '../Charts/HighMaps';
import LineChart from '../Charts/LineChart';
import img1 from '../../pic/medical-mask.svg';
import img2 from '../../pic/washing.svg';
import img3 from '../../pic/social-distancing.svg';
import img4 from '../../pic/no-crowd.svg';
import img5 from '../../pic/medical-file.svg';
import img6 from '../../pic/asset1.svg';
import img7 from '../../pic/github.svg';



function Info(props){
  return(
    <div style={{display: "flex", padding: "15px"}}>
      <img src={props.image} height={60}></img>
      <p style={{padding: "0 15px", fontSize: "17px", textAlign:"left"}}>{props.text}</p>
    </div>
  );
}

function InfoBP(props){
  return(
    <div style={{display: "flex", justifyContent: 'center', paddingTop: '10px', paddingBottom: '10px' }}>
      <img src={props.image} height={70}></img>
      <p style={{padding: "0 10px", fontSize: "21px", textAlign:"left"}}>{props.text}</p>
    </div>
  );
}

function InfoBlock(){
  const list = [
    <Info image={img1} text="Đeo khẩu trang vải thường xuyên tại nơi công cộng, nơi tập trung đông người; đeo khẩu trang y tế tại các cơ sở y tế, khu cách ly."/>,
    <Info image={img2} text="Rửa tay thường xuyên bằng xà phòng hoặc dung dịch sát khuẩn tay. Vệ sinh các bề mặt/ vật dụng thường xuyên tiếp xúc (tay nắm cửa, điện thoại, máy tính bảng, mặt bàn, ghế…). Giữ vệ sinh, lau rửa và để nhà cửa thông thoáng."/>,
    <Info image={img3} text="Giữ khoảng cách khi tiếp xúc với người khác."/>,
    <Info image={img4} text="Không tụ tập đông người."/>,
    <Info image={img5} text="Thực hiện khai báo y tế trên App NCOVI; cài đặt ứng dụng BlueZone tại địa chỉ https://www.bluezone.gov.vn để được cảnh báo nguy cơ lây nhiễm COVID-19."/>
  ];
  return(
    <div>
      {list}
    </div>
  )
}

function InfoProfile(){
  const list = [
    <div>
      <InfoBP image={img6} text="Tên: Nguyễn Minh Hiếu - 1994 --- https://github.com/henry-hieunguyen" />
    </div>,
  ];
  return(
    <div>
      {list}
    </div>
  )
}

export default function Summary({ report, selectedCountryId }) {
    const [mapData, setMapData] = useState ({});

    useEffect(() => {

        if (selectedCountryId) {
            import(
              `@highcharts/map-collection/countries/${selectedCountryId}/${selectedCountryId}-all.geo.json`
            ).then((res) =>  {
              console.log('Data Maps: ' + selectedCountryId);
              setMapData(res);
            })
        }
    }, [selectedCountryId])

    return (
      <div style={{ marginTop: 10 }}>
        <Grid container spacing={3}>
          <Grid item sm={8} xs={12}>
              <LineChart data={report} />
          </Grid>
          <Grid item sm={4} xs={12}>
              <HighMaps mapData={mapData} />
          </Grid>
        </Grid>
        <Grid style={{ marginTop: 30, paddingTop: '15px' ,backgroundColor: '#e3f2fd', borderRadius: '20px' }}>
          <Typography variant="h4" component="center"> Khuyến cáo về Covid-19 </Typography>
        <InfoBlock style={{ marginTop: 50 }}/>
        </Grid>
        <Grid style={{ marginTop: 20, paddingTop: '15px', backgroundColor: '#e0f7fa', borderRadius: '20px' }}>
          <Typography variant="h4" component="center"> Thông tin Developer </Typography>
        <InfoProfile style={{ marginTop: 50 }}/>
        </Grid>
      </div>
    );
}
