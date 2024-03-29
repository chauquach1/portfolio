import { motion } from "framer-motion";

export default function GreenDoodle() {
  return (
    <div className="absolute -translate-y-1 -translate-x-36 z-1 scale-[100%]">
      <motion.svg
        width="173"
        height="223"
        viewBox="0 0 173 223"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          // transition={{
          //   duration: 2,
          //   ease: "easeInOut",
          //   repeat: Infinity,
          //   repeatType: "reverse",
          //   repeatDelay: 1,
          // }}
          strokeWidth={4}
          strokeDasharray="0 1"
          fill="none"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M150.137 179.369C149.015 180.776 147.775 182.099 146.417 183.34C145.062 184.533 143.623 185.67 142.099 186.752C140.615 187.788 139.028 188.768 137.339 189.69C135.685 190.615 133.963 191.51 132.171 192.375C130.418 193.195 128.617 193.962 126.766 194.677C124.876 195.437 122.97 196.171 121.048 196.88C119.158 197.639 117.234 198.372 115.277 199.078C113.32 199.783 111.36 200.513 109.399 201.267C107.473 202.023 105.545 202.804 103.615 203.609C101.689 204.366 99.7772 205.172 97.8787 206.028C96.0198 206.839 94.1589 207.674 92.296 208.533C90.4372 209.343 88.5803 210.13 86.7256 210.893C84.9023 211.707 83.1029 212.45 81.3274 213.123C79.5122 213.841 77.721 214.488 75.9537 215.064C74.1864 215.64 72.4252 216.145 70.6701 216.577C68.9191 216.961 67.1921 217.274 65.4889 217.517C63.7857 217.76 62.0928 217.882 60.41 217.885C58.7314 217.839 57.0609 217.697 55.3986 217.459C53.7404 217.173 52.0924 216.766 50.4547 216.239C48.8525 215.716 47.2625 215.048 45.6848 214.235C44.1386 213.474 42.6203 212.594 41.1301 211.596C39.6043 210.594 38.1399 209.501 36.7371 208.316C35.3343 207.131 33.995 205.83 32.7193 204.414C31.4039 203.042 30.1657 201.605 29.0047 200.101C27.8123 198.547 26.6971 196.926 25.6591 195.239C24.6171 193.6 23.6365 191.87 22.7174 190.048C21.8298 188.277 21.0193 186.44 20.2861 184.537C19.5529 182.634 18.9106 180.714 18.3592 178.778C17.7763 176.791 17.2509 174.76 16.7828 172.685C16.3462 170.662 15.9492 168.594 15.5919 166.48C15.2304 164.415 14.9086 162.305 14.6264 160.149C14.3798 157.997 14.1352 155.82 13.8927 153.62C13.6816 151.47 13.4725 149.297 13.2655 147.099C13.0585 144.902 12.8515 142.704 12.6445 140.507C12.402 138.306 12.1594 136.106 11.9169 133.905C11.7098 131.708 11.4495 129.506 11.1359 127.299C10.8537 125.144 10.536 122.985 10.1827 120.824C9.82947 118.662 9.49194 116.526 9.17013 114.416C8.81278 112.302 8.45339 110.213 8.09195 108.148C7.76606 106.085 7.45793 104.025 7.16758 101.965C6.87314 99.9542 6.62997 97.9716 6.43806 96.0175C6.25024 94.0154 6.11165 92.0659 6.02229 90.1691C5.89738 88.2692 5.8791 86.3784 5.96744 84.4966C6.01615 82.66 6.15168 80.8549 6.37401 79.0814C6.59634 77.3079 6.94103 75.569 7.40807 73.8648C7.83548 72.2056 8.36952 70.5555 9.01018 68.9145C9.64675 67.3215 10.3879 65.7617 11.2336 64.235C12.0794 62.7083 12.9921 61.2357 13.9718 59.8172C14.9871 58.4018 16.0536 57.0149 17.1715 55.6567C18.3248 54.3014 19.5253 53.0228 20.773 51.8209C22.0248 50.5709 23.3081 49.372 24.6228 48.2243C25.969 47.1276 27.3486 46.058 28.7618 45.0155C30.1749 43.973 31.5997 43.0041 33.0362 42.1089C34.4767 41.1656 35.9289 40.296 37.3927 39.5C38.8565 38.704 40.3162 37.9561 41.7718 37.2563C43.2274 36.5565 44.6967 35.9063 46.1797 35.3057C47.6668 34.657 49.1676 34.0579 50.682 33.5084C52.165 32.9079 53.6794 32.3584 55.2253 31.86C56.7398 31.3105 58.2898 30.7641 59.8753 30.2206C61.4253 29.6742 63.0108 29.1307 64.6319 28.5903C66.2215 27.9988 67.8467 27.4103 69.5074 26.8248C71.1722 26.1912 72.8568 25.5351 74.5612 24.8564C76.2656 24.1778 78.0096 23.454 79.7933 22.6852C81.5455 21.8653 83.3531 21.0259 85.2161 20.1669C87.0435 19.3049 88.8907 18.4204 90.7577 17.5134C92.6643 16.5613 94.569 15.6332 96.4715 14.7291C98.4096 13.8281 100.346 12.9512 102.28 12.0983C104.214 11.2453 106.144 10.4405 108.07 9.6838C110.027 8.97819 111.96 8.34321 113.87 7.77887C115.815 7.21755 117.734 6.7509 119.627 6.37894C121.52 6.00699 123.399 5.80335 125.263 5.76806C127.132 5.68467 128.969 5.7681 130.773 6.01836C132.582 6.22052 134.336 6.63609 136.037 7.26506C137.777 7.84896 139.468 8.59818 141.108 9.5127C142.749 10.4272 144.342 11.483 145.887 12.6801C147.432 13.8771 148.911 15.214 150.325 16.6905C151.739 18.1671 153.073 19.7338 154.329 21.3907C155.615 23.0986 156.823 24.8968 157.951 26.785C159.084 28.6252 160.117 30.5781 161.051 32.6436C161.989 34.6611 162.831 36.7672 163.575 38.9619C164.359 41.1116 165.012 43.3228 165.535 45.5956C166.093 47.8714 166.543 50.1623 166.884 52.468C167.221 54.8219 167.467 57.1923 167.622 59.5792C167.777 61.966 167.857 64.395 167.862 66.866C167.87 69.2888 167.804 71.7538 167.663 74.2608C167.557 76.7708 167.395 79.3004 167.179 81.8494C166.966 84.3503 166.716 86.8724 166.428 89.4153C166.172 92.0094 165.88 94.6006 165.553 97.1886C165.265 99.7316 164.973 102.323 164.677 104.962C164.35 107.55 164.058 110.141 163.802 112.735C163.51 115.326 163.254 117.92 163.033 120.518C162.812 123.115 162.592 125.712 162.371 128.309C162.19 130.861 161.993 133.388 161.78 135.889C161.568 138.39 161.339 140.865 161.095 143.315C160.851 145.765 160.56 148.138 160.222 150.434C159.915 152.782 159.543 155.051 159.106 157.243C158.705 159.437 158.221 161.551 157.654 163.586C157.083 165.669 156.434 167.624 155.706 169.452C155.009 171.33 154.198 173.078 153.273 174.695C152.344 176.36 151.299 177.918 150.137 179.369Z"
          stroke="#8BAC92"
          stroke-width="10"
        />
      </motion.svg>
    </div>
  );
}