@extends('layouts.app')

@section('content')
  <div id="account-profile-app" data-profile='@json($profile ?? [])'></div>
@endsection

@push('scripts')
  @vite('resources/js/app.js')
@endpush
