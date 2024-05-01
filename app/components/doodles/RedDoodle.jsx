import { motion } from "framer-motion";

export default function RedDoodle() {
  return (
    <div className="absolute self-center translate-y-20 sm:translate-y-24 translate-x-20 scale-80 sm:scale-100 sm:translate-x-36 z-3 rotate-180 ">
      <motion.svg
        width="227"
        height="227"
        viewBox="0 0 227 227"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            // repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
          }}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M215.381 169.108C214.202 170.826 212.901 172.447 211.477 173.969C210.052 175.54 208.505 177.038 206.836 178.462C205.215 179.886 203.496 181.261 201.679 182.587C199.813 183.912 197.922 185.214 196.007 186.49C194.042 187.718 192.053 188.921 190.04 190.1C187.977 191.278 185.914 192.432 183.852 193.561C181.789 194.691 179.702 195.796 177.59 196.876C175.527 198.005 173.465 199.11 171.402 200.191C169.339 201.222 167.277 202.277 165.214 203.358C163.151 204.389 161.089 205.396 159.026 206.378C156.963 207.36 154.901 208.342 152.838 209.324C150.775 210.257 148.688 211.165 146.576 212.049C144.465 212.933 142.353 213.792 140.241 214.627C138.08 215.413 135.895 216.174 133.685 216.911C131.524 217.647 129.314 218.335 127.055 218.973C124.796 219.611 122.512 220.201 120.204 220.741C117.895 221.281 115.563 221.772 113.205 222.214C110.848 222.607 108.466 222.95 106.06 223.245C103.702 223.54 101.32 223.736 98.914 223.834C96.5076 223.982 94.1011 224.031 91.6947 223.982C89.2882 223.932 86.9063 223.785 84.549 223.54C82.1917 223.294 79.8343 222.95 77.477 222.508C75.1197 222.067 72.8114 221.526 70.5523 220.888C68.2441 220.201 65.9604 219.439 63.7013 218.605C61.4913 217.721 59.3059 216.739 57.145 215.658C54.9841 214.627 52.8723 213.473 50.8097 212.197C48.747 210.969 46.7089 209.668 44.6953 208.293C42.7309 206.869 40.8156 205.371 38.9493 203.8C37.0831 202.277 35.266 200.682 33.498 199.012C31.7791 197.293 30.1093 195.55 28.4887 193.782C26.868 191.966 25.321 190.124 23.8477 188.258C22.3743 186.343 20.9747 184.379 19.6487 182.366C18.2736 180.402 16.9967 178.388 15.818 176.326C14.6393 174.263 13.5589 172.177 12.5767 170.065C11.5453 167.904 10.5877 165.744 9.70367 163.583C8.81967 161.374 8.03389 159.164 7.34633 156.954C6.65878 154.745 6.04489 152.51 5.50467 150.252C4.96444 147.993 4.52244 145.734 4.17867 143.475C3.78578 141.167 3.49111 138.884 3.29467 136.625C3.09822 134.366 3 132.083 3 129.775C3 127.516 3.07367 125.282 3.221 123.072C3.36833 120.813 3.61389 118.579 3.95767 116.37C4.30144 114.209 4.74344 112.048 5.28367 109.888C5.77478 107.776 6.36411 105.689 7.05167 103.627C7.73922 101.565 8.525 99.5513 9.409 97.5871C10.293 95.623 11.2752 93.7079 12.3557 91.8419C13.387 89.9269 14.5166 88.0855 15.7443 86.3177C16.9721 84.55 18.249 82.8068 19.575 81.0881C20.901 79.3695 22.2761 77.6508 23.7003 75.9322C25.1246 74.2626 26.5733 72.5685 28.0467 70.8499C29.52 69.1803 31.0179 67.4862 32.5403 65.7676C34.0137 64.0489 35.5116 62.3303 37.034 60.6116C38.5073 58.8439 39.9807 57.027 41.454 55.161C42.8782 53.3442 44.3024 51.4782 45.7267 49.5631C47.1018 47.6481 48.4769 45.7085 49.852 43.7443C51.2271 41.7801 52.5777 39.8159 53.9037 37.8518C55.2788 35.8876 56.6784 33.948 58.1027 32.0329C59.4778 30.1178 60.902 28.2519 62.3753 26.435C63.8487 24.6182 65.3711 22.875 66.9427 21.2054C68.5142 19.5359 70.1349 17.94 71.8047 16.4177C73.5236 14.9446 75.3161 13.5697 77.1823 12.293C79.0486 11.0163 81.013 9.86232 83.0757 8.83113C85.0892 7.84905 87.1764 6.98972 89.3373 6.25316C91.4982 5.46749 93.7082 4.82913 95.9673 4.33809C98.2264 3.84705 100.51 3.50332 102.818 3.3069C105.127 3.06138 107.435 2.96317 109.743 3.01228C112.051 3.06138 114.359 3.23325 116.668 3.52787C118.927 3.8716 121.186 4.33809 123.445 4.92734C125.655 5.51659 127.816 6.22861 129.928 7.06338C132.089 7.94726 134.176 8.92934 136.189 10.0096C138.203 11.0899 140.192 12.2684 142.156 13.5451C144.121 14.8219 146.061 16.1722 147.976 17.5963C149.891 19.0203 151.807 20.4689 153.722 21.942C155.588 23.4642 157.479 24.9864 159.394 26.5087C161.261 28.0309 163.151 29.5531 165.067 31.0754C166.982 32.5976 168.922 34.0953 170.886 35.5684C172.802 36.9924 174.766 38.3919 176.78 39.7668C178.793 41.1418 180.807 42.4676 182.82 43.7443C184.834 45.021 186.847 46.2732 188.861 47.5008C190.875 48.7775 192.839 50.0296 194.754 51.2572C196.67 52.4849 198.511 53.7616 200.279 55.0874C202.096 56.3641 203.815 57.6899 205.436 59.0648C207.057 60.3906 208.579 61.7901 210.003 63.2632C211.428 64.7364 212.704 66.2832 213.834 67.9036C215.013 69.524 216.044 71.2427 216.928 73.0596C217.812 74.8273 218.573 76.6687 219.212 78.5838C219.899 80.548 220.464 82.5367 220.906 84.55C221.397 86.6123 221.79 88.7238 222.085 90.8844C222.379 93.045 222.625 95.2301 222.821 97.4398C223.018 99.6495 223.165 101.908 223.263 104.216C223.362 106.475 223.46 108.783 223.558 111.14C223.607 113.448 223.681 115.78 223.779 118.137C223.828 120.445 223.877 122.778 223.926 125.135C223.975 127.443 224 129.75 224 132.058C224 134.366 223.951 136.65 223.853 138.908C223.754 141.167 223.583 143.377 223.337 145.537C223.091 147.747 222.748 149.883 222.306 151.946C221.913 154.057 221.397 156.095 220.759 158.059C220.12 160.072 219.359 161.987 218.475 163.804C217.591 165.67 216.56 167.438 215.381 169.108Z"
          stroke="#B50000"
          strokeWidth="6"
        />
      </motion.svg>
    </div>
  );
}
