import axios from 'axios';
import database from '@react-native-firebase/database';

// https://maps.googleapis.com/maps/api/directions/json?
// destination=10.797303694974545,78.68099104974718&
// origin=10.83186117670343,78.69337928581724&
// waypoints=optimize:true|10.813916640284157,78.67815518172601|10.805348397192901,78.68584455761766|10.823334959043205,78.6834094191161&
// key=AIzaSyCYUfRcy0BLJRO7fuhHsI0dYxJqi0_X_E8
const testdata = {
  geocoded_waypoints: [
    {
      geocoder_status: 'OK',
      place_id: 'ChIJuwbu2BT1qjsRtHFHl1TkrCk',
      types: ['establishment', 'point_of_interest', 'transit_station'],
    },
    {
      geocoder_status: 'OK',
      place_id: 'ChIJS4Cy9Of1qjsRgqH41ZbJZ5I',
      types: ['establishment', 'point_of_interest'],
    },
    {
      geocoder_status: 'OK',
      place_id: 'ChIJj26A47D1qjsRe9WUhfLMg1o',
      types: [
        'bus_station',
        'establishment',
        'point_of_interest',
        'transit_station',
      ],
    },
  ],
  routes: [
    {
      bounds: {
        northeast: {
          lat: 10.8318232,
          lng: 78.6931974,
        },
        southwest: {
          lat: 10.79735,
          lng: 78.6787104,
        },
      },
      copyrights: 'Map data ©2021',
      legs: [
        {
          distance: {
            text: '3.9 km',
            value: 3873,
          },
          duration: {
            text: '12 mins',
            value: 723,
          },
          end_address:
            'No14 vadavur salai 9th A cross, Thillai Nagar, behind petrolbunk, West Thillai Nagar, Tiruchirappalli, Tamil Nadu 620018, India',
          end_location: {
            lat: 10.8257432,
            lng: 78.68339209999999,
          },
          start_address:
            'Trichy, Melapudur, Sangillyandapuram, Tiruchirappalli, Tamil Nadu 620001, India',
          start_location: {
            lat: 10.79735,
            lng: 78.681057,
          },
          steps: [
            {
              distance: {
                text: '0.2 km',
                value: 153,
              },
              duration: {
                text: '1 min',
                value: 34,
              },
              end_location: {
                lat: 10.7986418,
                lng: 78.6814535,
              },
              html_instructions:
                'Head \u003cb\u003enorth\u003c/b\u003e on \u003cb\u003eRockins Rd\u003c/b\u003e\u003cdiv style="font-size:0.9em"\u003ePass by Karmugil Books (on the left)\u003c/div\u003e',
              polyline: {
                points: 'mz{`Askf_NS@S@a@Cq@Ms@Qq@WOIOK',
              },
              start_location: {
                lat: 10.79735,
                lng: 78.681057,
              },
              travel_mode: 'DRIVING',
            },
            {
              distance: {
                text: '0.8 km',
                value: 776,
              },
              duration: {
                text: '3 mins',
                value: 151,
              },
              end_location: {
                lat: 10.8047434,
                lng: 78.67878759999999,
              },
              html_instructions:
                'At the roundabout, take the \u003cb\u003e1st\u003c/b\u003e exit onto \u003cb\u003eMcDonalds Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRoyal Rd\u003c/b\u003e\u003cdiv style="font-size:0.9em"\u003ePass by Darshani Spa (on the right)\u003c/div\u003e',
              maneuver: 'roundabout-left',
              polyline: {
                points:
                  'ob|`Aanf_NA@?@A??@A??@A??@A?A?A?A?A?A?AAA??AA??AOLCBKJEFcBlBQRa@\\GFk@b@_@Xs@d@C@e@TWH]H}@V[FA?M@O@]AaACgACyAGa@D]Hu@XgA`@{@TaBZk@`@',
              },
              start_location: {
                lat: 10.7986418,
                lng: 78.6814535,
              },
              travel_mode: 'DRIVING',
            },
            {
              distance: {
                text: '0.5 km',
                value: 535,
              },
              duration: {
                text: '2 mins',
                value: 94,
              },
              end_location: {
                lat: 10.8088906,
                lng: 78.6806622,
              },
              html_instructions:
                'At the roundabout, take the \u003cb\u003e3rd\u003c/b\u003e exit onto \u003cb\u003eCollector Office Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eLawsons Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eReynolds Rd\u003c/b\u003e\u003cdiv style="font-size:0.9em"\u003eContinue to follow Collector Office Rd/\u003cwbr/\u003eLawsons Rd\u003c/div\u003e\u003cdiv style="font-size:0.9em"\u003ePass by Raja Mess Xerox &amp; Communication (on the left)\u003c/div\u003e',
              maneuver: 'roundabout-left',
              polyline: {
                points:
                  'sh}`Am}e_N?@A??@?@A??@A??@A@A??@A?A??@A?A?A?A?A?A?A?AAA?AAA??AA??AA??A?AA??A?AAA?A?AOYU[kB{AOQGEMKCAGGOKMKMGKGq@]_@Mi@QYIWI_@Ig@ImAQkAKWCm@AA?U@g@?',
              },
              start_location: {
                lat: 10.8047434,
                lng: 78.67878759999999,
              },
              travel_mode: 'DRIVING',
            },
            {
              distance: {
                text: '0.8 km',
                value: 752,
              },
              duration: {
                text: '1 min',
                value: 86,
              },
              end_location: {
                lat: 10.813129,
                lng: 78.6856806,
              },
              html_instructions:
                'At the roundabout, take the \u003cb\u003e2nd\u003c/b\u003e exit onto \u003cb\u003eStudents Rd\u003c/b\u003e\u003cdiv style="font-size:0.9em"\u003ePass by MGR statue (on the right)\u003c/div\u003e',
              maneuver: 'roundabout-left',
              polyline: {
                points:
                  'qb~`Acif_NA@A@A?A@C@C@A@A?A?C?CAC?CACAA?AAACA?AAACACACAA?CAA?A?CAC?A?C?A?A@CQQc@a@YYMOOQEGm@w@uE}FaBqBqA}Ao@u@OSEKCIEMAOCY?MAGAMAGEQEIKKs@e@WMMIWU',
              },
              start_location: {
                lat: 10.8088906,
                lng: 78.6806622,
              },
              travel_mode: 'DRIVING',
            },
            {
              distance: {
                text: '0.5 km',
                value: 539,
              },
              duration: {
                text: '2 mins',
                value: 136,
              },
              end_location: {
                lat: 10.8177035,
                lng: 78.6852387,
              },
              html_instructions:
                'Slight \u003cb\u003eleft\u003c/b\u003e at Petal\'s Laundrycare onto \u003cb\u003eAnna Nagar Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eVOC St\u003c/b\u003e\u003cdiv style="font-size:0.9em"\u003eContinue to follow Anna Nagar Rd\u003c/div\u003e\u003cdiv style="font-size:0.9em"\u003ePass by Salih Essentials (on the right)\u003c/div\u003e',
              maneuver: 'turn-slight-left',
              polyline: {
                points:
                  'a}~`Aohg_NOc@C?cB@O?qADuABuABe@Ck@@mA?ADA@?BABKPA@C@A@QDGBE@IBG?I?K?I?E@E@E@EBIBOFIBO?Q@E?w@LM?O?M?w@J',
              },
              start_location: {
                lat: 10.813129,
                lng: 78.6856806,
              },
              travel_mode: 'DRIVING',
            },
            {
              distance: {
                text: '0.2 km',
                value: 185,
              },
              duration: {
                text: '1 min',
                value: 43,
              },
              end_location: {
                lat: 10.8173537,
                lng: 78.6835897,
              },
              html_instructions:
                'Turn \u003cb\u003eleft\u003c/b\u003e at The Beauty Opticals onto \u003cb\u003eBishop Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eKeela Chathiram Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eThennur High Rd\u003c/b\u003e\u003cdiv style="font-size:0.9em"\u003ePass by Eb Office Rockfort (on the left)\u003c/div\u003e',
              maneuver: 'turn-left',
              polyline: {
                points: 'sy_aAweg_NHj@Hn@Hh@@LDp@L~@Lv@BJ',
              },
              start_location: {
                lat: 10.8177035,
                lng: 78.6852387,
              },
              travel_mode: 'DRIVING',
            },
            {
              distance: {
                text: '0.9 km',
                value: 875,
              },
              duration: {
                text: '3 mins',
                value: 169,
              },
              end_location: {
                lat: 10.8252209,
                lng: 78.68340069999999,
              },
              html_instructions:
                'Turn \u003cb\u003eright\u003c/b\u003e after MENAKA CARD (on the right)\u003cdiv style="font-size:0.9em"\u003ePass by DEPARTMENTAL STORE (on the left)\u003c/div\u003e',
              maneuver: 'turn-right',
              polyline: {
                points: 'mw_aAm{f_NeB@gFR_A?gHFkB@{ADwA?wA@yA?K?eAAS?mBBeBCcB?',
              },
              start_location: {
                lat: 10.8173537,
                lng: 78.6835897,
              },
              travel_mode: 'DRIVING',
            },
            {
              distance: {
                text: '58 m',
                value: 58,
              },
              duration: {
                text: '1 min',
                value: 10,
              },
              end_location: {
                lat: 10.8257432,
                lng: 78.68339209999999,
              },
              html_instructions:
                'Continue straight past Lavanyaa Property Developers (P) Ltd., to stay on \u003cb\u003eMS Mani Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eThillai Nagar Main Rd\u003c/b\u003e',
              maneuver: 'straight',
              polyline: {
                points: 'shaaAgzf_NgB@',
              },
              start_location: {
                lat: 10.8252209,
                lng: 78.68340069999999,
              },
              travel_mode: 'DRIVING',
            },
          ],
          traffic_speed_entry: [],
          via_waypoint: [],
        },
        {
          distance: {
            text: '3.5 km',
            value: 3507,
          },
          duration: {
            text: '10 mins',
            value: 629,
          },
          end_address:
            'Chatiram Bus Station, Venis St, Melachinthamani, Tiruchirappalli, Tamil Nadu 620002, India',
          end_location: {
            lat: 10.8318232,
            lng: 78.6931221,
          },
          start_address:
            'No14 vadavur salai 9th A cross, Thillai Nagar, behind petrolbunk, West Thillai Nagar, Tiruchirappalli, Tamil Nadu 620018, India',
          start_location: {
            lat: 10.8257432,
            lng: 78.68339209999999,
          },
          steps: [
            {
              distance: {
                text: '58 m',
                value: 58,
              },
              duration: {
                text: '1 min',
                value: 10,
              },
              end_location: {
                lat: 10.8252209,
                lng: 78.68340069999999,
              },
              html_instructions:
                'Head \u003cb\u003esouth\u003c/b\u003e on \u003cb\u003eMS Mani Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eThillai Nagar Main Rd\u003c/b\u003e toward \u003cb\u003e3rd Cross Rd\u003c/b\u003e',
              polyline: {
                points: '{kaaAezf_NfBA',
              },
              start_location: {
                lat: 10.8257432,
                lng: 78.68339209999999,
              },
              travel_mode: 'DRIVING',
            },
            {
              distance: {
                text: '0.9 km',
                value: 875,
              },
              duration: {
                text: '3 mins',
                value: 166,
              },
              end_location: {
                lat: 10.8173537,
                lng: 78.6835897,
              },
              html_instructions:
                'Continue straight past Lavanyaa Property Developers (P) Ltd., to stay on \u003cb\u003eMS Mani Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eThillai Nagar Main Rd\u003c/b\u003e\u003cdiv style="font-size:0.9em"\u003ePass by HOTEL MALABAR RESTAURANT (on the left)\u003c/div\u003e',
              maneuver: 'straight',
              polyline: {
                points: 'shaaAgzf_NbB?dBBlBCR?dA@J?xA?vAAvA?zAEjBAfHG~@?fFSdBA',
              },
              start_location: {
                lat: 10.8252209,
                lng: 78.68340069999999,
              },
              travel_mode: 'DRIVING',
            },
            {
              distance: {
                text: '1.0 km',
                value: 985,
              },
              duration: {
                text: '3 mins',
                value: 158,
              },
              end_location: {
                lat: 10.8180344,
                lng: 78.6924449,
              },
              html_instructions:
                'Turn \u003cb\u003eleft\u003c/b\u003e at DEPARTMENTAL STORE onto \u003cb\u003eBishop Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eKeela Chathiram Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eThennur High Rd\u003c/b\u003e\u003cdiv style="font-size:0.9em"\u003eContinue to follow Keela Chathiram Rd/\u003cwbr/\u003eThennur High Rd\u003c/div\u003e\u003cdiv style="font-size:0.9em"\u003ePass by MENAKA CARD (on the left)\u003c/div\u003e',
              maneuver: 'turn-left',
              polyline: {
                points:
                  'mw_aAm{f_NCKMw@M_AEq@AMIi@Io@Ik@My@Is@AGOaA?CKs@Ge@CYOoAKaA?Q?I?CCw@Ao@A}@?C?M?GAE?A?QAy@?AEkBAOCg@EcAACEu@?EEq@?GCMAM@WBMBOJe@h@qB@MBOD[@M?A?E?K',
              },
              start_location: {
                lat: 10.8173537,
                lng: 78.6835897,
              },
              travel_mode: 'DRIVING',
            },
            {
              distance: {
                text: '0.9 km',
                value: 933,
              },
              duration: {
                text: '3 mins',
                value: 178,
              },
              end_location: {
                lat: 10.8263427,
                lng: 78.69265299999999,
              },
              html_instructions:
                'Turn \u003cb\u003eleft\u003c/b\u003e at New Priya Tyre Co. onto \u003cb\u003eMadurai Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eNagapattinam - Coimbatore - Gundlupet Hwy\u003c/b\u003e\u003cdiv style="font-size:0.9em"\u003ePass by sri balaji traders (on the right)\u003c/div\u003e',
              maneuver: 'turn-left',
              polyline: {
                points:
                  'u{_aAwrh_NK?G@G?G?I?aA?K?AAG?G?GAIAKAMAMAKCUI}@WYCK?w@EWAoBGO?g@?]AU?UA{AGUCk@EgAOIAKAI?I?M?mA@U?s@@c@Bg@BE?m@DoBRK@]@c@@yAFQ?eABgAJ',
              },
              start_location: {
                lat: 10.8180344,
                lng: 78.6924449,
              },
              travel_mode: 'DRIVING',
            },
            {
              distance: {
                text: '55 m',
                value: 55,
              },
              duration: {
                text: '1 min',
                value: 13,
              },
              end_location: {
                lat: 10.8265987,
                lng: 78.6929542,
              },
              html_instructions:
                'Slight \u003cb\u003eright\u003c/b\u003e at Annamaliyar Bldg onto \u003cb\u003eNagapattinam - Coimbatore - Gundlupet Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eSalai Rd\u003c/b\u003e\u003cdiv style="font-size:0.9em"\u003ePass by Mainguard Gate Gandhi statue (on the right)\u003c/div\u003e',
              maneuver: 'turn-slight-right',
              polyline: {
                points: 'soaaAath_Ny@YDa@',
              },
              start_location: {
                lat: 10.8263427,
                lng: 78.69265299999999,
              },
              travel_mode: 'DRIVING',
            },
            {
              distance: {
                text: '0.6 km',
                value: 601,
              },
              duration: {
                text: '2 mins',
                value: 104,
              },
              end_location: {
                lat: 10.8318232,
                lng: 78.6931221,
              },
              html_instructions:
                'Slight \u003cb\u003eleft\u003c/b\u003e at Vejey Sports onto \u003cb\u003eCollege Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eNagapattinam - Coimbatore - Gundlupet Hwy\u003c/b\u003e\u003cdiv style="font-size:0.9em"\u003ePass by Sri Ganapathy Book Center (on the left)\u003c/div\u003e\u003cdiv style="font-size:0.9em"\u003eDestination will be on the right\u003c/div\u003e',
              maneuver: 'turn-slight-left',
              polyline: {
                points:
                  'gqaaA}uh_NAKAGACECAAE?M?a@@M@eDPs@FiAFgBJA?aADg@?U?WCgA_@i@UGCOCeAIeA@sAHa@@O@',
              },
              start_location: {
                lat: 10.8265987,
                lng: 78.6929542,
              },
              travel_mode: 'DRIVING',
            },
          ],
          traffic_speed_entry: [],
          via_waypoint: [],
        },
      ],
      overview_polyline: {
        points:
          'mz{`Askf_Ng@BsAQs@Qq@W_@UA@?@C@CBG?GEe@d@uB`Ci@d@kA|@w@f@}@^{A`@]F]BaGQ_AN}Bz@{@TaBZk@b@A@ABEBOBMICG?Ce@u@{BmBa@[w@g@qAk@cA[w@SuB[cBOo@A}@@CBKDI@SGMSCW@Eu@s@}@cAwLeO_AiAIUG]Cg@Ko@QUkAs@e@_@Oc@C?sB@gDHuF@ENSVi@Ng@?WHYJYB}AN]?w@JHj@RxAF~@ZvBBJeB@gFR_A?sKHsDDqD@sE@iECgB@fBAhEB`CCbG?rDErKI~@?fFSdBACK[wBG_Ak@_EcAeIK}AGiDCoBG{BIkBMqBCU?e@|@uDLgA?G?KK?O@Q?wAAe@E[Ca@M}@WYCcAEgCIw@?eDKsC[m@A{DFm@B}CXgDLwABgAJy@YDa@AKCKGES?iG\\qDRcAD}@?WCgA_@q@YuAMeA@sAHq@B',
      },
      summary: 'MS Mani Rd/Thillai Nagar Main Rd',
      warnings: [],
      waypoint_order: [0],
    },
  ],
  status: 'OK',
};
class DistanceCalulation {
  data = (srcLatLng, desLatLng, wayPointLatLng) => {
//     console.log(srcLatLng);
//  console.log(`https://maps.googleapis.com/maps/api/directions/json?destination=${desLatLng}&origin=${srcLatLng}&waypoints=optimize:true|${wayPointLatLng}&key=AIzaSyCYUfRcy0BLJRO7fuhHsI0dYxJqi0_X_E8`);
     axios.post(`https://maps.googleapis.com/maps/api/directions/json?destination=${desLatLng}&origin=${srcLatLng}&waypoints=optimize:true|${wayPointLatLng}&key=AIzaSyCYUfRcy0BLJRO7fuhHsI0dYxJqi0_X_E8`)
     .then((res)=>{
        
         console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");//continre okay push//pl//ok
        // console.log(res)
         res = JSON.parse(res.request._response)
        // console.log(typeof res);
    var distance = 0,
      time = 0,
      obj = {};
    for (i = 0; i < res.routes[0].legs.length; i++) {
      distance += res.routes[0].legs[i].distance.value
      time += res.routes[0].legs[i].duration.value;
    }
    obj.distance =(distance/1000)
    obj.time = Math.round(time/60);
    return obj;
  })
}
  DistanceCal = (source, destination, coordinates, fn) => {
    var src, des;
    database()
      .ref('busstop')
      .on('value', async (snapshot) => {
        snapshot.forEach((val) => {
          if (val.val().name == source) {
            src = val.val().latitude + ',' + val.val().longitude;
          } else if (val.val().name == destination) {
            des = val.val().latitude + ',' + val.val().longitude;
          }
        });
        console.log(this.data(src, des, coordinates.join("|")));
    //    await fn())
      });
  };
}
export default DistanceCalulation;
