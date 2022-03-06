import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { sizesScheme } from "../../globalStyles/constants";

interface ILogo {
  height?: string | number;
}

export const Logo = ({ height }: ILogo) => {
  return (
    <Svg
      viewBox="0 0 157.14 22.878"
      style={{ height: height ? height : sizesScheme.Logo.default }}
    >
      <Path
        fill="#3698d4"
        d="M148.555 9.628c.677.809 1.016 1.971 1.016 3.489h-8.313c.139-1.471.583-2.619 1.343-3.451.758-.833 1.776-1.249 3.053-1.249 1.257 0 2.223.404 2.901 1.211m.499 13.01a12.454 12.454 0 0 0 2.414-.791V19.7c-1.673.717-3.362 1.074-5.073 1.074-1.626 0-2.884-.483-3.78-1.451-.894-.966-1.366-2.382-1.416-4.249h10.953v-1.522c0-2.147-.581-3.876-1.74-5.186-1.162-1.309-2.738-1.964-4.729-1.964-2.127 0-3.821.753-5.086 2.262-1.258 1.508-1.889 3.542-1.889 6.107 0 2.542.676 4.53 2.035 5.96 1.36 1.429 3.212 2.146 5.561 2.146 1.076 0 1.991-.08 2.75-.239M134.321 7.245c-.831.56-1.543 1.356-2.131 2.391h-.115l-.274-2.944h-1.988v15.896h2.407V14.06c0-1.558.456-2.857 1.37-3.901.915-1.045 2.013-1.567 3.3-1.567.504 0 1.083.073 1.743.217l.331-2.232a9.434 9.434 0 0 0-1.901-.174 4.785 4.785 0 0 0-2.742.842m-16.379 12.964c-.527-.454-.791-1.116-.791-1.987 0-1.111.422-1.931 1.27-2.459.846-.526 2.225-.824 4.14-.891l2.408-.101v1.436c0 1.479-.427 2.631-1.283 3.45-.855.822-2.033 1.234-3.531 1.234-.95 0-1.685-.229-2.213-.682m9.434 2.379v-10.85c0-1.855-.456-3.204-1.369-4.045-.914-.84-2.318-1.262-4.215-1.262-.937 0-1.874.122-2.805.363-.934.242-1.793.576-2.576 1l.74 1.842c1.673-.812 3.172-1.219 4.496-1.219 1.179 0 2.038.298 2.574.892.537.595.807 1.516.807 2.764v.986l-2.699.087c-5.135.155-7.701 1.839-7.701 5.048 0 1.499.447 2.653 1.341 3.466.894.812 2.13 1.217 3.707 1.217 1.18 0 2.162-.177 2.952-.528.788-.353 1.577-1.027 2.371-2.024h.116l.48 2.263zm-16.835 0 4.396-15.896h-2.493c-1.849 7.078-2.856 10.979-3.026 11.703-.167.727-.271 1.262-.311 1.611h-.114c-.193-1.13-.562-2.529-1.104-4.191l-2.842-9.123h-2.611l-2.915 9.123a36.253 36.253 0 0 0-.616 2.081 31.217 31.217 0 0 0-.514 2.14h-.117c-.079-.724-.387-2.131-.92-4.221-.537-2.088-1.321-5.128-2.345-9.123h-2.521l4.335 15.896h2.785l3.003-9.297c.289-.918.627-2.225 1.015-3.915h.117c.502 2.019.843 3.316 1.028 3.887l2.914 9.325z"
      />
      <Path
        fill="#f79437"
        d="M81.425 19.312c-.742-1.035-1.115-2.569-1.115-4.598 0-2.002.373-3.552 1.124-4.65.748-1.098 1.829-1.647 3.241-1.647 1.644 0 2.841.483 3.589 1.444.75.962 1.125 2.569 1.125 4.821v.507c0 1.993-.369 3.436-1.108 4.329-.74.896-1.934 1.342-3.578 1.342-1.44.001-2.534-.514-3.278-1.548m8.414 3.276h1.959V.021h-2.409v6.468l.058 1.117.102 1.145h-.189c-1.152-1.565-2.805-2.349-4.962-2.349-2.069 0-3.684.725-4.843 2.175-1.163 1.45-1.741 3.485-1.741 6.105 0 2.622.577 4.642 1.733 6.064 1.156 1.421 2.773 2.131 4.851 2.131 2.214 0 3.88-.808 4.99-2.42h.13zm-13.949 0v-10.37c0-2.03-.481-3.509-1.446-4.431-.97-.922-2.411-1.384-4.326-1.384-1.09 0-2.082.215-2.972.645s-1.58 1.036-2.074 1.819h-.114l-.393-2.175h-1.958v15.896h2.408v-8.339c0-2.07.386-3.553 1.16-4.453.773-.901 1.99-1.35 3.654-1.35 1.258 0 2.182.32 2.77.958.59.639.885 1.606.885 2.901v10.283zM59.522 6.691h-2.408v15.896h2.408zM54.53 22.588v-10.37c0-2.03-.446-3.509-1.341-4.431s-2.242-1.384-4.04-1.384c-1.151 0-2.174.242-3.075.725-.899.484-1.585 1.142-2.06 1.973h-.117c-.763-1.8-2.387-2.697-4.871-2.697-1.025 0-1.952.217-2.778.652a4.744 4.744 0 0 0-1.922 1.813h-.116l-.39-2.178h-1.958v15.896h2.406v-8.339c0-2.06.352-3.541 1.052-4.446.701-.903 1.804-1.358 3.314-1.358 1.149 0 1.997.317 2.537.952.542.633.814 1.582.814 2.849v10.341h2.407v-8.875c0-1.788.358-3.114 1.073-3.974.716-.861 1.823-1.293 3.322-1.293 1.141 0 1.982.317 2.522.952.541.633.813 1.582.813 2.849v10.341h2.408z"
      />
      <Path
        d="M19.229 9.999c.801-1.033 1.992-1.551 3.567-1.551 1.596 0 2.801.524 3.618 1.573s1.225 2.583 1.225 4.605c0 2.039-.408 3.588-1.225 4.649-.817 1.058-2.013 1.587-3.589 1.587-1.575 0-2.77-.531-3.582-1.595-.813-1.064-1.218-2.61-1.218-4.641 0-2.05.4-3.592 1.204-4.627M28.17 8.62c-1.311-1.48-3.077-2.219-5.301-2.219-2.3 0-4.1.724-5.394 2.168-1.297 1.445-1.945 3.463-1.945 6.056 0 1.673.299 3.132.9 4.381.599 1.247 1.451 2.203 2.552 2.87 1.101.668 2.364 1.002 3.784 1.002 2.3 0 4.106-.728 5.411-2.185 1.306-1.453 1.958-3.477 1.958-6.068 0-2.523-.654-4.526-1.965-6.005M14.996 4.415l1.045-2.117c-1.663-.812-3.608-1.218-5.831-1.218-2.088 0-3.904.443-5.445 1.333-1.543.889-2.722 2.156-3.539 3.8C.407 7.858 0 9.771 0 11.957c0 3.491.847 6.184 2.545 8.079 1.697 1.895 4.107 2.843 7.231 2.843 2.154 0 3.968-.276 5.439-.826V19.89c-1.896.534-3.584.798-5.061.798-2.408 0-4.263-.757-5.563-2.27-1.302-1.514-1.951-3.658-1.951-6.432 0-2.697.673-4.822 2.022-6.374s3.19-2.329 5.52-2.329c1.604 0 3.209.378 4.814 1.132m42.156-2.82h2.386v2.386h-2.386zm94.962.917c0-.444.109-.863.334-1.252.223-.39.528-.698.92-.923a2.493 2.493 0 0 1 1.26-.337c.445 0 .862.111 1.252.335a2.498 2.498 0 0 1 1.26 2.177c0 .439-.108.852-.324 1.236-.217.387-.52.695-.909.928a2.46 2.46 0 0 1-1.278.347c-.461 0-.889-.117-1.277-.346a2.48 2.48 0 0 1-.911-.925 2.455 2.455 0 0 1-.327-1.24zm.349 0c0 .388.099.747.292 1.081.193.336.46.6.794.793.336.193.696.29 1.079.29a2.183 2.183 0 0 0 1.869-1.078c.193-.331.292-.692.292-1.086a2.09 2.09 0 0 0-.292-1.079 2.155 2.155 0 0 0-.786-.789 2.088 2.088 0 0 0-1.083-.293 2.1 2.1 0 0 0-1.08.292 2.173 2.173 0 0 0-1.085 1.869zm3.182-.607a.818.818 0 0 1-.142.474.843.843 0 0 1-.4.305l.796 1.318h-.561l-.692-1.182h-.452v1.182h-.493V1.025h.873c.367 0 .639.074.814.218.171.144.257.365.257.662zm-1.451.504h.362a.628.628 0 0 0 .429-.14.44.44 0 0 0 .163-.351c0-.167-.046-.287-.143-.36-.097-.071-.25-.108-.455-.108h-.356z"
        fill="#3698d4"
      />
    </Svg>
  );
};