import stls from '@/styles/components/icons/IconCoatOfArmsRussia.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeIconCoatOfArmsRussiaProps = TypeClassNames

const IconCoatOfArmsRussia = ({
  classNames
}: TypeIconCoatOfArmsRussiaProps) => {
  return (
    <div
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <svg viewBox='0 0 124 124' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Герб России</title>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M84.5184 41.6392C82.5888 39.9474 79.8135 39.9861 78.2211 40.4776C79.2644 39.1967 81.6936 38.1464 82.4097 38.019C82.955 38.2234 84.5182 39.8301 84.5182 41.639L84.5184 41.6392ZM90.6795 34.6337C89.4106 27.8453 73.6341 32.3431 65.6892 29.4598C65.5368 31.4387 68.135 34.6095 70.6203 35.7831C66.3721 39.4699 62.5581 46.898 61.7886 55.9731C61.0214 46.898 57.2073 39.4699 52.9593 35.7831C55.4443 34.6095 58.0447 31.4387 57.8904 29.4598C49.9454 32.3431 34.1687 27.8453 32.8975 34.6337C32.6301 36.0703 33.3213 38.2599 34.0682 38.8892C34.2016 38.4339 34.8992 36.9446 37.0983 36.6107C48.2134 34.9313 57.4932 52.0619 49.1167 58.9882C48.9891 59.0933 49.0606 59.2878 49.2337 59.2878H74.3474C74.5183 59.2878 74.5904 59.0933 74.465 58.9882C66.0859 52.0619 75.366 34.9313 86.4808 36.6107C88.6821 36.9446 89.3772 38.4339 89.5112 38.8891C90.2579 38.2599 90.9491 36.0705 90.6795 34.6335V34.6337ZM93.3829 19.0531C93.1834 18.4118 99.7005 18.3957 99.7005 22.4747C99.7005 25.2087 95.8022 26.5035 95.8022 29.3405C95.8022 30.6618 97.2237 31.631 97.6599 31.631C96.6559 27.0762 100.808 29.4598 101.929 30.3116C99.7007 24.1864 104.716 24.2251 104.222 21.4166C103.879 19.4537 99.5197 20.0467 97.9418 19.0531C95.1422 17.2907 91.8301 10.4332 89.6473 17.2907C93.7164 21.0687 91.3487 26.629 86.1831 26.629C86.1831 26.629 86.1541 27.4443 86.2015 27.5091C92.3628 27.2075 94.5105 22.6793 93.3831 19.0531H93.3829ZM21.5007 30.3116C22.6221 29.4598 26.7732 27.0762 25.7717 31.631C26.2056 31.631 27.6271 30.6618 27.6271 29.3405C27.6271 26.5035 23.7286 25.2087 23.7286 22.4747C23.7286 18.3955 30.2459 18.4118 30.0462 19.0531C28.9209 22.6791 31.069 27.2077 37.23 27.5091C37.2752 27.4443 37.2464 26.629 37.2464 26.629C32.0829 26.629 29.715 21.0683 33.7822 17.2907C31.5994 10.4332 28.2873 17.2907 25.4877 19.0531C23.91 20.0469 19.5506 19.4537 19.207 21.4166C18.7152 24.2251 23.7284 24.1866 21.5005 30.3116H21.5007ZM38.995 41.639C40.9266 39.9472 43.7019 39.9859 45.2923 40.4774C44.2533 39.1965 41.8198 38.1462 41.1058 38.0188C40.5606 38.2232 38.9952 39.8299 38.9952 41.6388L38.995 41.639ZM64.7201 3.66449L61.7146 0L58.7092 3.66449L61.7148 7.52116L64.7205 3.66449H64.7201ZM81.8771 14.7452L79.7396 12.1408L77.6043 14.7452L79.7396 17.2906L81.8771 14.745V14.7452ZM99.2131 90.0217L96.5037 87.1544L93.7943 90.0217L96.5037 92.5368L99.2131 90.0214V90.0217ZM45.8269 14.7448L43.6893 12.1404L41.554 14.7448L43.6893 17.2904L45.8267 14.7448H45.8269ZM39.7046 27.5087H47.6763C54.3784 27.5087 57.3944 23.3951 58.3057 19.8276H65.1254C66.0368 23.3953 69.0503 27.5089 75.755 27.5089H83.7266C83.7266 27.5089 85.121 25.617 85.4706 24.6802C86.7299 21.3091 85.121 19.7368 82.7738 19.7368L79.7394 22.4867L76.7051 19.7368C74.3578 19.7368 72.7492 21.3091 74.0083 24.6802C74.1687 25.1114 74.5535 25.7444 74.9174 26.3009C72.0887 25.9122 68.4784 23.9761 67.6862 19.8276C67.6862 19.8276 69.7763 16.5073 70.3011 15.1637C72.1856 10.332 69.7786 8.35681 66.2588 8.35681L61.7144 13.699L57.1703 8.35681C53.6505 8.35681 51.2435 10.3318 53.13 15.1637C53.6528 16.5075 55.7448 19.8278 55.7448 19.8278C54.9507 23.9763 51.3404 25.9124 48.5117 26.3011C48.8779 25.7446 49.2606 25.1114 49.421 24.6804C50.6778 21.3093 49.0734 19.737 46.7239 19.737L43.6897 22.4869L40.6555 19.737C38.3063 19.737 36.7016 21.3093 37.9587 24.6804C38.3083 25.6172 39.7052 27.5091 39.7052 27.5091L39.7046 27.5087ZM122.122 52.2193C120.583 52.9985 111.556 57.2274 99.9924 55.6632C100.112 55.1116 100.214 54.5562 100.297 53.9979C107.993 53.0772 114.249 51.7721 118.236 49.5544C122.78 47.0251 124.767 40.9872 122.473 36.495C122.414 36.3817 122.249 36.3616 122.167 36.4564C120.91 37.9034 113.006 46.5011 100.554 49.1739C100.522 48.529 100.463 47.8856 100.377 47.2457C106.425 43.8157 112.33 39.8637 115.142 36.2501C119.392 30.7865 119.001 23.8179 114.957 20.2646C114.915 20.2286 114.859 20.2124 114.805 20.2202C114.75 20.2279 114.701 20.2589 114.671 20.3052C113.391 22.4156 101.415 41.774 88.2648 50.1308C88.1044 50.2334 87.9426 50.334 87.7795 50.4324C87.4029 50.6611 87.3619 51.1507 87.6829 51.4421C89.1987 52.816 90.1411 54.7282 90.1411 56.8509C90.1411 60.5415 87.296 63.6111 83.5354 64.2767C81.6242 64.647 78.8653 64.5397 76.2157 63.6638C76.0964 63.6252 75.9731 63.7041 75.9731 63.8235V75.5133C75.9731 75.7012 76.2592 75.7478 76.3269 75.5674C77.9375 71.3002 82.7595 70.3934 84.8683 70.3934C85.6274 74.9545 86.983 78.7325 88.7439 80.7659C91.6113 84.0702 96.2937 84.0238 98.3243 81.7392C98.3578 81.7014 98.3721 81.6503 98.3633 81.6006C98.3544 81.5509 98.3233 81.5079 98.2788 81.484C97.0859 80.7984 90.26 76.6078 88.8938 69.7401C89.4332 69.5539 89.9595 69.3434 90.4638 69.0944C92.6669 72.7409 95.874 75.9885 98.4557 77.2288C102.792 79.3092 106.763 78.2972 108.524 75.252C108.587 75.1447 108.509 75.0111 108.38 74.9991C105.697 74.7845 97.4642 72.4251 93.9587 66.6766C94.3601 66.308 94.753 65.9237 95.1191 65.5149C98.7869 68.3072 103.973 70.7759 107.687 71.2797C112.031 71.8706 116.954 70.4845 117.074 65.432C117.076 65.3307 116.985 65.2477 116.878 65.2541C115.333 65.3469 105.107 65.7922 97.8202 61.6095C98.0733 61.1284 98.3093 60.6384 98.5278 60.1405C98.5278 60.1405 109.538 62.7429 114.755 61.8806C119.939 61.0249 122.976 57.1601 122.389 52.3525C122.373 52.2326 122.233 52.1621 122.122 52.2187L122.122 52.2193ZM24.9011 60.1411C25.1202 60.639 25.3569 61.129 25.6107 61.6101C18.3263 65.7907 8.10414 65.3494 6.55312 65.2547C6.44407 65.2483 6.35358 65.3353 6.35552 65.4345C6.47732 70.4851 11.398 71.871 15.7425 71.2803C19.4539 70.7765 24.6422 68.3078 28.31 65.5155C28.6783 65.9243 29.0692 66.3086 29.47 66.6769C25.9627 72.4251 17.732 74.7847 15.0493 74.9993C14.9198 75.0113 14.8436 75.1449 14.9055 75.2522C16.6665 78.2974 20.6368 79.3092 24.9755 77.229C27.5553 75.9887 30.7624 72.7411 32.9657 69.0949C33.4715 69.3436 33.9982 69.5541 34.5351 69.7403C33.1691 76.608 26.3434 80.7986 25.1501 81.4842C25.1061 81.5085 25.0753 81.5514 25.0666 81.601C25.0578 81.6505 25.0719 81.7014 25.1049 81.7394C27.1354 84.024 31.8198 84.0704 34.6871 80.7661C36.4485 78.7325 37.8019 74.9547 38.561 70.3938C40.6715 70.3938 45.4915 71.3006 47.1022 75.5678C47.1722 75.748 47.458 75.7012 47.458 75.5133V63.8235C47.458 63.7043 47.3327 63.6254 47.2134 63.6638C44.5638 64.5397 41.8051 64.6472 39.896 64.2767C36.1335 63.6113 33.2884 60.5417 33.2884 56.8509C33.2884 54.728 34.2325 52.8138 35.7466 51.4399C36.0695 51.1505 36.0264 50.6607 35.6519 50.4322C35.4875 50.3337 35.3243 50.2332 35.1623 50.1306C22.021 41.778 10.0502 22.4338 8.76035 20.3089C8.70042 20.2097 8.55657 20.1896 8.46801 20.2663C4.42979 23.8216 4.03691 30.7882 8.28704 36.2497C11.0993 39.8633 17.0031 43.8153 23.0494 47.2453C22.9641 47.8852 22.9058 48.5285 22.8746 49.1733C10.4328 46.5024 2.53519 37.9186 1.26587 36.462C1.18158 36.3628 1.01259 36.3831 0.955167 36.4964C-1.33405 40.9905 0.652967 47.0245 5.19331 49.5538C9.18011 51.7715 15.436 53.0766 23.132 53.9973C23.2151 54.5556 23.3166 55.111 23.4363 55.6626C11.8852 57.2248 2.86233 53.006 1.31131 52.2207C1.19608 52.1621 1.05609 52.235 1.04179 52.3564C0.457881 57.1641 3.49187 61.0249 8.67606 61.8806C13.891 62.7429 24.9011 60.1405 24.9011 60.1405V60.1411ZM96.5035 96.2295L92.492 93.0729C90.8914 94.0261 89.7147 95.54 89.2581 97.3144C86.8451 97.6523 80.2659 96.1914 80.9055 95.2224C88.1162 85.0806 82.6008 79.0426 75.9727 79.3784V86.1896C75.9727 88.3769 74.0636 90.1493 71.7121 90.1493H67.1352C63.8518 90.1493 61.7144 93.4498 61.7144 93.4498C61.7144 93.4498 59.5773 90.1493 56.2939 90.1493H51.7166C49.3636 90.1493 47.4586 88.3769 47.4586 86.1896V79.3786C40.8303 79.043 35.3106 85.081 42.5234 95.2226C43.157 96.1816 36.3949 97.7175 33.2229 97.3289C32.3876 96.4627 31.1819 95.9165 29.8324 95.9165C29.2587 95.9166 28.6896 96.0188 28.1516 96.2181C28.1516 96.2181 15.6874 84.4172 15.459 84.3018L15.5619 84.063C16.2715 82.7357 15.1854 81.2889 14.4985 81.3902C15.2964 80.4331 15.3337 76.2424 10.9065 75.2731C11.036 76.1149 11.1018 77.833 11.1018 77.833C11.1018 77.833 7.68496 75.9854 5.96921 77.5797C4.4615 79.3647 6.5537 82.6021 6.5537 82.6021C6.5537 82.6021 4.80507 82.6446 3.94314 82.5717C5.21052 86.8574 9.46065 86.5539 10.3802 85.7082C10.3203 86.3901 11.8574 87.3613 13.1594 86.5821L13.7313 86.3051C13.8322 86.4404 25.9716 97.9097 25.9716 97.9097C25.414 98.7372 25.1488 99.7531 25.3317 100.836C25.6197 102.527 27.0292 103.93 28.8293 104.294C30.1003 104.549 31.2956 104.302 32.2542 103.741L35.4676 106.724C35.7538 106.983 36.1405 107.145 36.5722 107.115C37.3582 107.062 37.9465 106.424 37.887 105.694C37.8622 105.364 37.6936 105.081 37.461 104.866C37.4096 104.81 34.1881 101.819 34.1881 101.819C36.8456 99.9551 41.7974 98.6423 45.9075 98.6423C46.6297 98.6423 46.969 98.0313 46.7202 97.4319C44.8583 92.954 48.8617 89.7107 53.0028 92.3512C54.8092 93.5026 56.6442 95.7709 58.0267 99.5547C51.2317 101.2 42.7007 105.732 40.9747 110.68C40.3102 112.59 42.5052 115.194 45.1713 115.718C45.2185 115.729 45.2679 115.72 45.3085 115.694C45.3491 115.667 45.3774 115.626 45.3873 115.579C46.7801 108.193 54.7228 102.689 58.8557 101.754C59.0636 102.31 58.9955 102.13 59.2034 102.685C54.7023 104.813 50.3369 109.304 49.0902 114.641C48.5183 117.086 51.2441 119.289 53.4946 119.893C53.6077 119.923 53.7189 119.844 53.7251 119.735C54.153 112.984 57.1338 107.252 59.8039 104.644C59.8771 105.153 59.932 105.666 59.9686 106.179C59.9686 106.179 57.2347 113.798 57.2347 119.356C57.2347 121.942 61.0775 123.747 61.6453 124C62.3549 123.747 66.1957 121.942 66.1957 119.356C66.1957 113.798 63.4618 106.179 63.4618 106.179C63.4991 105.666 63.5547 105.153 63.6285 104.644C66.2967 107.252 69.2794 112.982 69.7054 119.732C69.7115 119.842 69.8246 119.923 69.9354 119.892C72.1883 119.29 74.9122 117.086 74.3422 114.642C73.0932 109.304 68.7301 104.814 64.2288 102.685C64.4345 102.131 64.3667 102.311 64.5745 101.754C68.7096 102.689 76.6503 108.193 78.043 115.578C78.0531 115.626 78.0815 115.667 78.1221 115.693C78.1626 115.719 78.212 115.728 78.2592 115.718C80.9231 115.194 83.1222 112.59 82.4536 110.68C80.7319 105.732 72.1986 101.2 65.4038 99.5549C66.7881 95.7711 68.623 93.5028 70.4292 92.3514C74.5684 89.7108 78.5716 92.9546 76.7099 97.4325C76.4609 98.0313 76.7983 98.6423 77.5225 98.6423C82.1715 98.6423 87.8986 100.322 90.1654 102.574C91.614 104.747 94.2903 106.137 97.3103 105.84C100.742 105.504 103.54 102.926 103.926 99.7391C104.264 96.9466 102.82 94.4395 100.518 93.0737L96.5037 96.2305L96.5035 96.2295ZM66.9355 75.8876C68.3653 75.3578 70.6056 75.7866 70.5294 77.8504C70.511 78.3177 71.1674 78.3177 71.2146 77.8402C71.6425 74.7505 69.5544 73.8599 67.3697 74.2223C67.0983 73.1598 66.8761 72.2312 66.623 71.3105C66.4216 70.5661 66.3473 69.1676 67.2095 69.1676C67.6744 69.1676 67.4873 70.4688 67.4442 71.0292C67.4049 71.5208 67.5818 71.8184 67.9811 71.8325C68.2301 71.8426 68.5408 71.5251 68.7259 71.3144C69.9768 69.9 70.2668 67.7108 68.802 66.6547C67.5762 65.7682 64.5067 66.4279 63.6629 67.6905C63.5357 67.2148 62.9266 66.4299 62.6343 66.0876C62.3507 65.7541 62.2766 65.5254 62.6695 65.2321C62.8547 65.0903 63.4143 64.5341 63.4143 63.9593C63.4143 63.6194 63.1509 62.992 62.3137 62.992C61.6533 62.992 60.9189 63.4494 60.9189 64.4691C60.9189 64.6959 60.9744 64.939 61.1204 65.2C60.7028 65.131 59.5694 65.1594 58.9872 65.303L67.037 87.3932C69.3411 86.2559 71.03 84.4551 71.03 82.5228C71.03 80.8755 68.6042 81.4219 67.4256 82.7069C67.047 80.6187 66.7097 78.6903 66.3415 76.7679C66.241 76.2377 66.5103 76.0477 66.9361 75.8878L66.9355 75.8876ZM55.5532 60.882L57.2442 65.5803C55.796 65.9244 53.4674 66.9805 53.4674 68.3786C53.4674 70.2405 56.7608 71.4524 58.6659 71.3066C58.5711 71.7316 58.6804 72.11 58.9766 72.4559C58.2854 72.4559 56.9813 72.7776 56.5532 73.2389C55.5431 72.2981 53.9631 71.9561 53.2122 72.5288C52.4573 73.1055 52.4349 74.0829 53.2226 75.1876C53.7717 75.9525 53.9776 76.7074 53.3605 77.5935C55.6563 77.5935 54.8106 74.609 55.7096 74.609C55.5924 75.1877 55.6644 75.8574 55.9258 76.6C56.0986 77.0937 56.0986 77.4438 55.8024 77.9192C55.0619 79.1031 53.91 81.8225 54.0662 84.2811C53.3133 84.2769 52.9306 84.0926 53.1961 83.065C53.2947 82.6821 53.0583 82.4091 52.7456 82.8807C52.3999 83.4008 52.2333 84.289 52.2333 84.6691C52.2333 86.8588 54.8415 87.2998 55.8372 86.8366C58.7175 89.6236 64.3748 88.8802 66.2694 87.9454L56.3086 60.6144C56.1048 60.0985 55.3747 60.3453 55.5536 60.8816L55.5532 60.882ZM55.2075 83.3948C55.0018 82.2695 56.5673 80.2583 58.5588 78.3179C58.1349 79.5824 58.3983 81.7618 59.2293 82.5126C57.785 82.5126 56.0694 82.7836 55.2077 83.3948H55.2075Z'
          fill={colors.delta}
        />
      </svg>
    </div>
  )
}

export default IconCoatOfArmsRussia
