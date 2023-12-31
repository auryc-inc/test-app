window.TableColStyle = `:host { display: inherit; }.container, .container-fluid, .container-xxl, .container-xl, .container-lg, .container-md, .container-sm { --uui-gutter-x: 1.5rem; --uui-gutter-y: 0; width: 100%; padding-right: calc(var(--uui-gutter-x) * 0.5); padding-left: calc(var(--uui-gutter-x) * 0.5); margin-right: auto; margin-left: auto; box-sizing: border-box; }@media (min-width: 576px) {
  .container-sm, .container { max-width: 540px; }
}@media (min-width: 768px) {
  .container-md, .container-sm, .container { max-width: 720px; }
}@media (min-width: 992px) {
  .container-lg, .container-md, .container-sm, .container { max-width: 960px; }
}@media (min-width: 1200px) {
  .container-xl, .container-lg, .container-md, .container-sm, .container { max-width: 1140px; }
}@media (min-width: 1400px) {
  .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container { max-width: 1320px; }
}.row { --uui-gutter-x: 1.5rem; --uui-gutter-y: 1.5rem; display: flex; flex-wrap: wrap; margin-top: calc(-1 * var(--uui-gutter-y)); margin-right: calc(-0.5 * var(--uui-gutter-x)); margin-left: calc(-0.5 * var(--uui-gutter-x)); }.col { box-sizing: border-box; flex-shrink: 0; width: 100%; max-width: 100%; padding-right: calc(var(--uui-gutter-x) * 0.5); padding-left: calc(var(--uui-gutter-x) * 0.5); margin-top: var(--uui-gutter-y); }.col { flex: 1 0 0%; }.col-auto { flex: 0 0 auto; width: auto; }.col-1 { flex: 0 0 auto; width: 8.33333%; }.col-2 { flex: 0 0 auto; width: 16.6667%; }.col-3 { flex: 0 0 auto; width: 25%; }.col-4 { flex: 0 0 auto; width: 33.3333%; }.col-5 { flex: 0 0 auto; width: 41.6667%; }.col-6 { flex: 0 0 auto; width: 50%; }.col-7 { flex: 0 0 auto; width: 58.3333%; }.col-8 { flex: 0 0 auto; width: 66.6667%; }.col-9 { flex: 0 0 auto; width: 75%; }.col-10 { flex: 0 0 auto; width: 83.3333%; }.col-11 { flex: 0 0 auto; width: 91.6667%; }.col-12 { flex: 0 0 auto; width: 100%; }.offset-1 { margin-left: 8.33333%; }.offset-2 { margin-left: 16.6667%; }.offset-3 { margin-left: 25%; }.offset-4 { margin-left: 33.3333%; }.offset-5 { margin-left: 41.6667%; }.offset-6 { margin-left: 50%; }.offset-7 { margin-left: 58.3333%; }.offset-8 { margin-left: 66.6667%; }.offset-9 { margin-left: 75%; }.offset-10 { margin-left: 83.3333%; }.offset-11 { margin-left: 91.6667%; }@media (min-width: 576px) {
  .col-sm { flex: 1 0 0%; }
  .col-sm-auto { flex: 0 0 auto; width: auto; }
  .col-sm-1 { flex: 0 0 auto; width: 8.33333%; }
  .col-sm-2 { flex: 0 0 auto; width: 16.6667%; }
  .col-sm-3 { flex: 0 0 auto; width: 25%; }
  .col-sm-4 { flex: 0 0 auto; width: 33.3333%; }
  .col-sm-5 { flex: 0 0 auto; width: 41.6667%; }
  .col-sm-6 { flex: 0 0 auto; width: 50%; }
  .col-sm-7 { flex: 0 0 auto; width: 58.3333%; }
  .col-sm-8 { flex: 0 0 auto; width: 66.6667%; }
  .col-sm-9 { flex: 0 0 auto; width: 75%; }
  .col-sm-10 { flex: 0 0 auto; width: 83.3333%; }
  .col-sm-11 { flex: 0 0 auto; width: 91.6667%; }
  .col-sm-12 { flex: 0 0 auto; width: 100%; }
  .offset-sm-0 { margin-left: 0px; }
  .offset-sm-1 { margin-left: 8.33333%; }
  .offset-sm-2 { margin-left: 16.6667%; }
  .offset-sm-3 { margin-left: 25%; }
  .offset-sm-4 { margin-left: 33.3333%; }
  .offset-sm-5 { margin-left: 41.6667%; }
  .offset-sm-6 { margin-left: 50%; }
  .offset-sm-7 { margin-left: 58.3333%; }
  .offset-sm-8 { margin-left: 66.6667%; }
  .offset-sm-9 { margin-left: 75%; }
  .offset-sm-10 { margin-left: 83.3333%; }
  .offset-sm-11 { margin-left: 91.6667%; }
}@media (min-width: 768px) {
  .col-md { flex: 1 0 0%; }
  .col-md-auto { flex: 0 0 auto; width: auto; }
  .col-md-1 { flex: 0 0 auto; width: 8.33333%; }
  .col-md-2 { flex: 0 0 auto; width: 16.6667%; }
  .col-md-3 { flex: 0 0 auto; width: 25%; }
  .col-md-4 { flex: 0 0 auto; width: 33.3333%; }
  .col-md-5 { flex: 0 0 auto; width: 41.6667%; }
  .col-md-6 { flex: 0 0 auto; width: 50%; }
  .col-md-7 { flex: 0 0 auto; width: 58.3333%; }
  .col-md-8 { flex: 0 0 auto; width: 66.6667%; }
  .col-md-9 { flex: 0 0 auto; width: 75%; }
  .col-md-10 { flex: 0 0 auto; width: 83.3333%; }
  .col-md-11 { flex: 0 0 auto; width: 91.6667%; }
  .col-md-12 { flex: 0 0 auto; width: 100%; }
  .offset-md-0 { margin-left: 0px; }
  .offset-md-1 { margin-left: 8.33333%; }
  .offset-md-2 { margin-left: 16.6667%; }
  .offset-md-3 { margin-left: 25%; }
  .offset-md-4 { margin-left: 33.3333%; }
  .offset-md-5 { margin-left: 41.6667%; }
  .offset-md-6 { margin-left: 50%; }
  .offset-md-7 { margin-left: 58.3333%; }
  .offset-md-8 { margin-left: 66.6667%; }
  .offset-md-9 { margin-left: 75%; }
  .offset-md-10 { margin-left: 83.3333%; }
  .offset-md-11 { margin-left: 91.6667%; }
}@media (min-width: 992px) {
  .col-lg { flex: 1 0 0%; }
  .col-lg-auto { flex: 0 0 auto; width: auto; }
  .col-lg-1 { flex: 0 0 auto; width: 8.33333%; }
  .col-lg-2 { flex: 0 0 auto; width: 16.6667%; }
  .col-lg-3 { flex: 0 0 auto; width: 25%; }
  .col-lg-4 { flex: 0 0 auto; width: 33.3333%; }
  .col-lg-5 { flex: 0 0 auto; width: 41.6667%; }
  .col-lg-6 { flex: 0 0 auto; width: 50%; }
  .col-lg-7 { flex: 0 0 auto; width: 58.3333%; }
  .col-lg-8 { flex: 0 0 auto; width: 66.6667%; }
  .col-lg-9 { flex: 0 0 auto; width: 75%; }
  .col-lg-10 { flex: 0 0 auto; width: 83.3333%; }
  .col-lg-11 { flex: 0 0 auto; width: 91.6667%; }
  .col-lg-12 { flex: 0 0 auto; width: 100%; }
  .offset-lg-0 { margin-left: 0px; }
  .offset-lg-1 { margin-left: 8.33333%; }
  .offset-lg-2 { margin-left: 16.6667%; }
  .offset-lg-3 { margin-left: 25%; }
  .offset-lg-4 { margin-left: 33.3333%; }
  .offset-lg-5 { margin-left: 41.6667%; }
  .offset-lg-6 { margin-left: 50%; }
  .offset-lg-7 { margin-left: 58.3333%; }
  .offset-lg-8 { margin-left: 66.6667%; }
  .offset-lg-9 { margin-left: 75%; }
  .offset-lg-10 { margin-left: 83.3333%; }
  .offset-lg-11 { margin-left: 91.6667%; }
}@media (min-width: 1200px) {
  .col-xl { flex: 1 0 0%; }
  .col-xl-auto { flex: 0 0 auto; width: auto; }
  .col-xl-1 { flex: 0 0 auto; width: 8.33333%; }
  .col-xl-2 { flex: 0 0 auto; width: 16.6667%; }
  .col-xl-3 { flex: 0 0 auto; width: 25%; }
  .col-xl-4 { flex: 0 0 auto; width: 33.3333%; }
  .col-xl-5 { flex: 0 0 auto; width: 41.6667%; }
  .col-xl-6 { flex: 0 0 auto; width: 50%; }
  .col-xl-7 { flex: 0 0 auto; width: 58.3333%; }
  .col-xl-8 { flex: 0 0 auto; width: 66.6667%; }
  .col-xl-9 { flex: 0 0 auto; width: 75%; }
  .col-xl-10 { flex: 0 0 auto; width: 83.3333%; }
  .col-xl-11 { flex: 0 0 auto; width: 91.6667%; }
  .col-xl-12 { flex: 0 0 auto; width: 100%; }
  .offset-xl-0 { margin-left: 0px; }
  .offset-xl-1 { margin-left: 8.33333%; }
  .offset-xl-2 { margin-left: 16.6667%; }
  .offset-xl-3 { margin-left: 25%; }
  .offset-xl-4 { margin-left: 33.3333%; }
  .offset-xl-5 { margin-left: 41.6667%; }
  .offset-xl-6 { margin-left: 50%; }
  .offset-xl-7 { margin-left: 58.3333%; }
  .offset-xl-8 { margin-left: 66.6667%; }
  .offset-xl-9 { margin-left: 75%; }
  .offset-xl-10 { margin-left: 83.3333%; }
  .offset-xl-11 { margin-left: 91.6667%; }
}@media (min-width: 1400px) {
  .col-xxl { flex: 1 0 0%; }
  .col-xxl-auto { flex: 0 0 auto; width: auto; }
  .col-xxl-1 { flex: 0 0 auto; width: 8.33333%; }
  .col-xxl-2 { flex: 0 0 auto; width: 16.6667%; }
  .col-xxl-3 { flex: 0 0 auto; width: 25%; }
  .col-xxl-4 { flex: 0 0 auto; width: 33.3333%; }
  .col-xxl-5 { flex: 0 0 auto; width: 41.6667%; }
  .col-xxl-6 { flex: 0 0 auto; width: 50%; }
  .col-xxl-7 { flex: 0 0 auto; width: 58.3333%; }
  .col-xxl-8 { flex: 0 0 auto; width: 66.6667%; }
  .col-xxl-9 { flex: 0 0 auto; width: 75%; }
  .col-xxl-10 { flex: 0 0 auto; width: 83.3333%; }
  .col-xxl-11 { flex: 0 0 auto; width: 91.6667%; }
  .col-xxl-12 { flex: 0 0 auto; width: 100%; }
  .offset-xxl-0 { margin-left: 0px; }
  .offset-xxl-1 { margin-left: 8.33333%; }
  .offset-xxl-2 { margin-left: 16.6667%; }
  .offset-xxl-3 { margin-left: 25%; }
  .offset-xxl-4 { margin-left: 33.3333%; }
  .offset-xxl-5 { margin-left: 41.6667%; }
  .offset-xxl-6 { margin-left: 50%; }
  .offset-xxl-7 { margin-left: 58.3333%; }
  .offset-xxl-8 { margin-left: 66.6667%; }
  .offset-xxl-9 { margin-left: 75%; }
  .offset-xxl-10 { margin-left: 83.3333%; }
  .offset-xxl-11 { margin-left: 91.6667%; }
} 
`;