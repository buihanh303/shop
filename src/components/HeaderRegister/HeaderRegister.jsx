import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './headerRegister.style'

export default function HeaderRegister({ title }) {
  return (
    <S.Header>
      <S.Container className="container">
        <S.HeaderBrand>
          <S.HeaderIcon to="">
            {/* <svg viewBox="0 0 192 65" class="shopee-svg-icon _3XB6zw _3d2_4f icon-shopee-logo">
              <g fill-rule="evenodd">
                <path d="M35.6717403 44.953764c-.3333497 2.7510509-2.0003116 4.9543414-4.5823845 6.0575984-1.4379707.6145919-3.36871.9463856-4.896954.8421628-2.3840266-.0911143-4.6237865-.6708937-6.6883352-1.7307424-.7375522-.3788551-1.8370513-1.1352759-2.6813095-1.8437757-.213839-.1790053-.239235-.2937577-.0977428-.4944671.0764015-.1151823.2172535-.3229831.5286218-.7791994.45158-.6616533.5079208-.7446018.5587128-.8221779.14448-.2217688.3792333-.2411091.6107855-.0588804.0243289.0189105.0243289.0189105.0426824.0333083.0379873.0294402.0379873.0294402.1276204.0990653.0907002.0706996.14448.1123887.166248.1287205 2.2265285 1.7438508 4.8196989 2.7495466 7.4376251 2.8501162 3.6423042-.0496401 6.2615109-1.6873341 6.7308041-4.2020035.5160305-2.7675977-1.6565047-5.1582742-5.9070334-6.4908212-1.329344-.4166762-4.6895175-1.7616869-5.3090528-2.1250697-2.9094471-1.7071043-4.2697358-3.9430584-4.0763845-6.7048539.296216-3.8283059 3.8501677-6.6835796 8.340785-6.702705 2.0082079-.004083 4.0121475.4132378 5.937338 1.2244562.6816382.2873109 1.8987274.9496089 2.3189359 1.2633517.2420093.1777159.2898136.384872.1510957.60836-.0774686.12958-.2055158.3350171-.4754821.7632974l-.0029878.0047276c-.3553311.5640922-.3664286.5817134-.447952.7136572-.140852.2144625-.3064598.2344475-.5604202.0732783-2.0600669-1.3839063-4.3437898-2.0801572-6.8554368-2.130442-3.126914.061889-5.4706057 1.9228561-5.6246892 4.4579402-.0409751 2.2896772 1.676352 3.9613243 5.3858811 5.2358503 7.529819 2.4196871 10.4113092 5.25648 9.869029 9.7292478M26.3725216 5.42669372c4.9022893 0 8.8982174 4.65220288 9.0851664 10.47578358H17.2875686c.186949-5.8235807 4.1828771-10.47578358 9.084953-10.47578358m25.370857 11.57065968c0-.6047069-.4870064-1.0948761-1.0875481-1.0948761h-11.77736c-.28896-7.68927544-5.7774923-13.82058185-12.5059489-13.82058185-6.7282432 0-12.2167755 6.13130641-12.5057355 13.82058185l-11.79421958.0002149c-.59136492.0107446-1.06748731.4968309-1.06748731 1.0946612 0 .0285807.00106706.0569465.00320118.0848825H.99995732l1.6812605 37.0613963c.00021341.1031483.00405483.2071562.01173767.3118087.00170729.0236381.003628.0470614.00554871.0704847l.00362801.0782207.00405483.004083c.25545428 2.5789222 2.12707837 4.6560709 4.67201764 4.7519129l.00576212.0055872h37.4122078c.0177132.0002149.0354264.0004298.0531396.0004298.0177132 0 .0354264-.0002149.0531396-.0004298h.0796027l.0017073-.0015043c2.589329-.0706995 4.6867431-2.1768587 4.9082648-4.787585l.0012805-.0012893.0017073-.0350275c.0021341-.0275062.0040548-.0547975.0057621-.0823037.0040548-.065757.0068292-.1312992.0078963-.1964115l1.8344904-37.207738h-.0012805c.001067-.0186956.0014939-.0376062.0014939-.0565167M176.465457 41.1518926c.720839-2.3512494 2.900423-3.9186779 5.443734-3.9186779 2.427686 0 4.739107 1.6486899 5.537598 3.9141989l.054826.1556978h-11.082664l.046506-.1512188zm13.50267 3.4063683c.014933.0006399.014933.0006399.036906.0008531.021973-.0002132.021973-.0002132.044372-.0008531.53055-.0243144.950595-.4766911.950595-1.0271786 0-.0266606-.000853-.0496953-.00256-.0865936.000427-.0068251.000427-.020262.000427-.0635588 0-5.1926268-4.070748-9.4007319-9.09145-9.4007319-5.020488 0-9.091235 4.2081051-9.091235 9.4007319 0 .3871116.022399.7731567.067838 1.1568557l.00256.0204753.01408.1013102c.250022 1.8683731 1.047233 3.5831812 2.306302 4.9708108-.00064-.0006399.00064.0006399.007253.0078915 1.396026 1.536289 3.291455 2.5833031 5.393601 2.9748936l.02752.0053321v-.0027727l.13653.0228215c.070186.0119439.144211.0236746.243409.039031 2.766879.332724 5.221231-.0661182 7.299484-1.1127057.511777-.2578611.971928-.5423827 1.37064-.8429007.128211-.0968312.243622-.1904632.34346-.2781231.051412-.0452164.092372-.083181.114131-.1051493.468898-.4830897.498124-.6543572.215249-1.0954297-.31146-.4956734-.586228-.9179769-.821744-1.2675504-.082345-.1224254-.154023-.2267215-.214396-.3133151-.033279-.0475624-.033279-.0475624-.054399-.0776356-.008319-.0117306-.008319-.0117306-.013866-.0191956l-.00256-.0038391c-.256208-.3188605-.431565-.3480805-.715933-.0970445-.030292.0268739-.131624.1051493-.14997.1245582-1.999321 1.775381-4.729508 2.3465571-7.455854 1.7760208-.507724-.1362888-.982595-.3094759-1.419919-.5184948-1.708127-.8565509-2.918343-2.3826022-3.267563-4.1490253l-.02752-.1394881h13.754612zM154.831964 41.1518926c.720831-2.3512494 2.900389-3.9186779 5.44367-3.9186779 2.427657 0 4.739052 1.6486899 5.537747 3.9141989l.054612.1556978h-11.082534l.046505-.1512188zm13.502512 3.4063683c.015146.0006399.015146.0006399.037118.0008531.02176-.0002132.02176-.0002132.044159-.0008531.530543-.0243144.950584-.4766911.950584-1.0271786 0-.0266606-.000854-.0496953-.00256-.0865936.000426-.0068251.000426-.020262.000426-.0635588 0-5.1926268-4.070699-9.4007319-9.091342-9.4007319-5.020217 0-9.091343 4.2081051-9.091343 9.4007319 0 .3871116.022826.7731567.068051 1.1568557l.00256.0204753.01408.1013102c.250019 1.8683731 1.04722 3.5831812 2.306274 4.9708108-.00064-.0006399.00064.0006399.007254.0078915 1.396009 1.536289 3.291417 2.5833031 5.393538 2.9748936l.027519.0053321v-.0027727l.136529.0228215c.070184.0119439.144209.0236746.243619.039031 2.766847.332724 5.22117-.0661182 7.299185-1.1127057.511771-.2578611.971917-.5423827 1.370624-.8429007.128209-.0968312.243619-.1904632.343456-.2781231.051412-.0452164.09237-.083181.11413-.1051493.468892-.4830897.498118-.6543572.215246-1.0954297-.311457-.4956734-.586221-.9179769-.821734-1.2675504-.082344-.1224254-.154022-.2267215-.21418-.3133151-.033492-.0475624-.033492-.0475624-.054612-.0776356-.008319-.0117306-.008319-.0117306-.013866-.0191956l-.002346-.0038391c-.256419-.3188605-.431774-.3480805-.716138-.0970445-.030292.0268739-.131623.1051493-.149969.1245582-1.999084 1.775381-4.729452 2.3465571-7.455767 1.7760208-.507717-.1362888-.982582-.3094759-1.419902-.5184948-1.708107-.8565509-2.918095-2.3826022-3.267311-4.1490253l-.027733-.1394881h13.754451zM138.32144123 49.7357905c-3.38129629 0-6.14681004-2.6808521-6.23169343-6.04042014v-.31621743c.08401943-3.35418649 2.85039714-6.03546919 6.23169343-6.03546919 3.44242097 0 6.23320537 2.7740599 6.23320537 6.1960534 0 3.42199346-2.7907844 6.19605336-6.23320537 6.19605336m.00172791-15.67913203c-2.21776751 0-4.33682838.7553485-6.03989586 2.140764l-.19352548.1573553V34.6208558c0-.4623792-.0993546-.56419733-.56740117-.56419733h-2.17651376c-.47409424 0-.56761716.09428403-.56761716.56419733v27.6400724c0 .4539841.10583425.5641973.56761716.5641973h2.17651376c.46351081 0 .56740117-.1078454.56740117-.5641973V50.734168l.19352548.1573553c1.70328347 1.3856307 3.82234434 2.1409792 6.03989586 2.1409792 5.27140956 0 9.54473746-4.2479474 9.54473746-9.48802964 0-5.239867-4.2733279-9.48781439-9.54473746-9.48781439M115.907646 49.5240292c-3.449458 0-6.245805-2.7496948-6.245805-6.1425854 0-3.3928907 2.79656-6.1427988 6.245805-6.1427988 3.448821 0 6.24538 2.7499081 6.24538 6.1427988 0 3.3926772-2.796346 6.1425854-6.24538 6.1425854m.001914-15.5438312c-5.28187 0-9.563025 4.2112903-9.563025 9.4059406 0 5.1944369 4.281155 9.4059406 9.563025 9.4059406 5.281657 0 9.562387-4.2115037 9.562387-9.4059406 0-5.1946503-4.280517-9.4059406-9.562387-9.4059406M94.5919049 34.1890939c-1.9281307 0-3.7938902.6198995-5.3417715 1.7656047l-.188189.1393105V23.2574169c0-.4254677-.1395825-.5643476-.5649971-.5643476h-2.2782698c-.4600414 0-.5652122.1100273-.5652122.5643476v29.2834155c0 .443339.1135587.5647782.5652122.5647782h2.2782698c.4226187 0 .5649971-.1457701.5649971-.5647782v-9.5648406c.023658-3.011002 2.4931278-5.4412923 5.5299605-5.4412923 3.0445753 0 5.516841 2.4421328 5.5297454 5.4630394v9.5430935c0 .4844647.0806524.5645628.5652122.5645628h2.2726775c.481764 0 .565212-.0824666.565212-.5645628v-9.5710848c-.018066-4.8280677-4.0440197-8.7806537-8.9328471-8.7806537M62.8459442 47.7938061l-.0053397.0081519c-.3248668.4921188-.4609221.6991347-.5369593.8179812-.2560916.3812097-.224267.551113.1668119.8816949.91266.7358184 2.0858968 1.508535 2.8774525 1.8955369 2.2023021 1.076912 4.5810275 1.646045 7.1017886 1.6975309 1.6283921.0821628 3.6734936-.3050536 5.1963734-.9842376 2.7569891-1.2298679 4.5131066-3.6269626 4.8208863-6.5794607.4985136-4.7841067-2.6143125-7.7747902-10.6321784-10.1849709l-.0021359-.0006435c-3.7356476-1.2047686-5.4904836-2.8064071-5.4911243-5.0426086.1099976-2.4715346 2.4015793-4.3179454 5.4932602-4.4331449 2.4904317.0062212 4.6923065.6675996 6.8557356 2.0598624.4562232.2767364.666607.2256796.9733188-.172263.035242-.0587797.1332787-.2012238.543367-.790093l.0012815-.0019308c.3829626-.5500403.5089793-.7336731.5403767-.7879478.258441-.4863266.2214903-.6738208-.244985-1.0046173-.459427-.3290803-1.7535544-1.0024722-2.4936356-1.2978721-2.0583439-.8211991-4.1863175-1.2199998-6.3042524-1.1788111-4.8198184.1046878-8.578747 3.2393171-8.8265087 7.3515337-.1572005 2.9703036 1.350301 5.3588174 4.5000778 7.124567.8829712.4661613 4.1115618 1.6865902 5.6184225 2.1278667 4.2847814 1.2547527 6.5186944 3.5630343 6.0571315 6.2864205-.4192725 2.4743234-3.0117991 4.1199394-6.6498372 4.2325647-2.6382344-.0549182-5.2963324-1.0217793-7.6043603-2.7562084-.0115337-.0083664-.0700567-.0519149-.1779185-.1323615-.1516472-.1130543-.1516472-.1130543-.1742875-.1300017-.4705335-.3247898-.7473431-.2977598-1.0346184.1302162-.0346012.0529875-.3919333.5963776-.5681431.8632459"></path>
              </g>
            </svg> */}
            <svg width={252} height={78} viewBox="0 0 252 78" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M77.875 13H18.5417H14.8333H7.41666V19.5H14.8333H15.9458L28.1166 48.8312C29.7074 52.6695 33.9127 55.25 38.5704 55.25H70.4583V48.75H38.5704C37.0166 48.75 35.6148 47.8888 35.0845 46.6115L33.2749 42.25H67.6622C70.9627 42.25 73.8922 40.3065 74.7934 37.5342L81.4424 17.1438C81.7613 16.1623 81.5351 15.1092 80.838 14.2935C80.1334 13.4777 79.0357 13 77.875 13ZM67.6622 35.75H30.5789L23.8372 19.5H72.9614L67.6622 35.75Z"
                fill="#ee4d2d"
              />
              <path
                d="M38.9375 68.25C42.0096 68.25 44.5 66.0674 44.5 63.375C44.5 60.6826 42.0096 58.5 38.9375 58.5C35.8654 58.5 33.375 60.6826 33.375 63.375C33.375 66.0674 35.8654 68.25 38.9375 68.25Z"
                fill="#ee4d2d"
              />
              <path
                d="M61.1875 68.25C64.2596 68.25 66.75 66.0674 66.75 63.375C66.75 60.6826 64.2596 58.5 61.1875 58.5C58.1154 58.5 55.625 60.6826 55.625 63.375C55.625 66.0674 58.1154 68.25 61.1875 68.25Z"
                fill="#ee4d2d"
              />
              <path
                d="M106.805 55L96.3906 27.7891H96.2227C96.4186 29.9447 96.5166 32.5062 96.5166 35.4736V55H93.2202V24.3037H98.5952L108.316 49.625H108.484L118.29 24.3037H123.623V55H120.053V35.2217C120.053 32.9541 120.151 30.4906 120.347 27.8311H120.179L109.681 55H106.805ZM127.885 31.9883H131.622L136.661 45.1108C137.767 48.1063 138.453 50.2689 138.719 51.5986H138.887C139.069 50.8848 139.447 49.667 140.021 47.9453C140.608 46.2096 142.512 40.8906 145.731 31.9883H149.469L139.58 58.1914C138.6 60.7809 137.452 62.6146 136.136 63.6924C134.834 64.7842 133.232 65.3301 131.328 65.3301C130.264 65.3301 129.215 65.2111 128.179 64.9731V62.1807C128.949 62.3486 129.809 62.4326 130.761 62.4326C133.155 62.4326 134.862 61.0889 135.884 58.4014L137.165 55.126L127.885 31.9883ZM171.053 46.8325C171.053 49.534 170.073 51.6406 168.113 53.1523C166.154 54.6641 163.494 55.4199 160.135 55.4199C156.495 55.4199 153.696 54.951 151.736 54.0132V50.5698C152.996 51.1017 154.368 51.5216 155.852 51.8296C157.335 52.1375 158.805 52.2915 160.261 52.2915C162.64 52.2915 164.432 51.8436 165.636 50.9478C166.84 50.0379 167.441 48.7782 167.441 47.1685C167.441 46.1047 167.224 45.2368 166.791 44.5649C166.371 43.8791 165.657 43.2492 164.649 42.6753C163.655 42.1014 162.136 41.4505 160.093 40.7227C157.237 39.7008 155.194 38.4901 153.962 37.0903C152.744 35.6906 152.135 33.8639 152.135 31.6104C152.135 29.2448 153.024 27.3621 154.802 25.9624C156.579 24.5627 158.931 23.8628 161.856 23.8628C164.908 23.8628 167.714 24.4227 170.276 25.5425L169.163 28.6499C166.63 27.5861 164.166 27.0542 161.772 27.0542C159.883 27.0542 158.406 27.4601 157.342 28.272C156.278 29.0838 155.747 30.2106 155.747 31.6523C155.747 32.7161 155.943 33.591 156.334 34.2769C156.726 34.9487 157.384 35.5716 158.308 36.1455C159.246 36.7054 160.674 37.3283 162.591 38.0142C165.811 39.1619 168.022 40.3937 169.226 41.7095C170.444 43.0252 171.053 44.7329 171.053 46.8325ZM192.553 55V40.1138C192.553 38.2381 192.126 36.8384 191.272 35.9146C190.418 34.9907 189.081 34.5288 187.262 34.5288C184.84 34.5288 183.069 35.1867 181.95 36.5024C180.844 37.8182 180.291 39.9738 180.291 42.9692V55H176.806V22.3301H180.291V32.2192C180.291 33.409 180.235 34.3958 180.123 35.1797H180.333C181.019 34.0739 181.992 33.2061 183.251 32.5762C184.525 31.9323 185.974 31.6104 187.598 31.6104C190.411 31.6104 192.518 32.2822 193.917 33.626C195.331 34.9557 196.038 37.0763 196.038 39.9878V55H192.553ZM223.081 43.4731C223.081 47.2244 222.136 50.1569 220.247 52.2705C218.357 54.3701 215.746 55.4199 212.415 55.4199C210.357 55.4199 208.531 54.937 206.935 53.9712C205.339 53.0054 204.108 51.6196 203.24 49.814C202.372 48.0083 201.938 45.8947 201.938 43.4731C201.938 39.7218 202.876 36.8034 204.751 34.7178C206.627 32.6182 209.231 31.5684 212.562 31.5684C215.781 31.5684 218.336 32.6392 220.226 34.7808C222.129 36.9224 223.081 39.8198 223.081 43.4731ZM205.549 43.4731C205.549 46.4126 206.137 48.6522 207.313 50.1919C208.489 51.7316 210.217 52.5015 212.499 52.5015C214.781 52.5015 216.509 51.7386 217.685 50.2129C218.875 48.6732 219.47 46.4266 219.47 43.4731C219.47 40.5477 218.875 38.3291 217.685 36.8174C216.509 35.2917 214.767 34.5288 212.457 34.5288C210.175 34.5288 208.454 35.2777 207.292 36.7754C206.13 38.2731 205.549 40.5057 205.549 43.4731ZM239.92 55.4199C238.422 55.4199 237.05 55.147 235.805 54.6011C234.573 54.0412 233.537 53.1873 232.697 52.0396H232.445C232.613 53.3833 232.697 54.6571 232.697 55.8608V65.3301H229.212V31.9883H232.046L232.529 35.1377H232.697C233.593 33.8779 234.636 32.9681 235.826 32.4082C237.015 31.8483 238.38 31.5684 239.92 31.5684C242.971 31.5684 245.323 32.6112 246.975 34.6968C248.64 36.7824 249.473 39.7078 249.473 43.4731C249.473 47.2524 248.626 50.1919 246.933 52.2915C245.253 54.3771 242.915 55.4199 239.92 55.4199ZM239.416 34.5288C237.064 34.5288 235.364 35.1797 234.314 36.4814C233.264 37.7832 232.725 39.8548 232.697 42.6963V43.4731C232.697 46.7065 233.236 49.0231 234.314 50.4229C235.392 51.8086 237.12 52.5015 239.5 52.5015C241.488 52.5015 243.041 51.6966 244.161 50.0869C245.295 48.4772 245.862 46.2586 245.862 43.4312C245.862 40.5617 245.295 38.3641 244.161 36.8384C243.041 35.2987 241.46 34.5288 239.416 34.5288Z"
                fill="#ee4d2d"
              />
            </svg>
          </S.HeaderIcon>
          <S.HeaderTitle>{title}</S.HeaderTitle>
        </S.HeaderBrand>
        <Link to="" className="link">
          Cần trợ giúp
        </Link>
      </S.Container>
    </S.Header>
  )
}